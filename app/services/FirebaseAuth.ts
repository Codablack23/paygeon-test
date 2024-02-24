import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebaseConfig"
import { FirebaseError } from "firebase/app"

interface ProfileUpdateData{
    displayName?:string
    photoURL?:string
}
interface FirebaseAuthResponse{
    status:"pending"|"failed"|"success",
    message:string|null,
    error:unknown | null | FirebaseError,
    error_message:string|null,
    data?:null| {
        [key:string]:any
    },
    user?:null | User
}
function capitalizeWord(word:string){
    const words = word.split(" ")
    const capitalizedWords = words.map(w=>{
        return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
    })
    return capitalizedWords.join(" ")
}
class FirebaseAuthService{
    private auth = auth

    async signIn(email:string,password:string){
        const response:FirebaseAuthResponse = {
            status:"pending",
            error:"A request have not been sent or is still pending",
            error_message:"A request have not been sent or is still pending",
            message:null,
        }

        try {
            const user = await signInWithEmailAndPassword(this.auth,email,password)
            response.status = "success"
            response.error=null
            response.error_message=null
            response.message ="User successfully signed in"
            response.user = user.user
        } catch (error) {
            response.error = error
            response.status = "failed"
            response.message = null
            response.data = null
            console.log(error instanceof FirebaseError)
            if(error instanceof FirebaseError){
                response.error_message = capitalizeWord(error.code.replace("auth/",""))
            }else{
                response.error_message ="An Error occured please try again later"
            }
        }

        return response
    }
    async signUp(email:string,password:string){
        const response:FirebaseAuthResponse = {
            status:"pending",
            error:"A request have not been sent or is still pending",
            error_message:"A request have not been sent or is still pending",
            message:null,
        }

        try {
            const user = await createUserWithEmailAndPassword(this.auth,email,password)
            response.status = "success"
            response.error=null
            response.error_message=null
            response.message ="User successfully signed up"
            response.user = user.user
        } catch (error) {
            response.error = error
            response.status = "failed"
            response.message = null
            response.data = null
            response.error_message ="An Error occured please try again later"
            if(error instanceof FirebaseError){
                response.error_message =  capitalizeWord(error.code.replace("auth/",""))
            }
        }
        return response
    }
    async signOut(){
        const response:FirebaseAuthResponse = {
            status:"pending",
            error:"A request have not been sent or is still pending",
            error_message:"A request have not been sent or is still pending",
            message:null,
        }
        try {
            await signOut(auth)
        } catch (error) {
            console.log("error")
            response.error = error
            response.status = "failed"
            response.message = null
            response.data = null
            response.error_message ="An Error occured please try again later"
            if(error instanceof FirebaseError){
                response.error_message = capitalizeWord(error.code.replace("auth/",""))
            }
        }
        return response
    }
    async updateProfile(user:User,data:ProfileUpdateData){
        const response:FirebaseAuthResponse = {
            status:"pending",
            error:"A request have not been sent or is still pending",
            error_message:"A request have not been sent or is still pending",
            message:null,
        }
        try {
            await updateProfile(user,data)
            response.status = "success"
            response.error=null
            response.error_message=null
            response.message ="Profile Updated successfully"
        } catch (error) {
            console.log("error")
            response.error = error
            response.status = "failed"
            response.message = null
            response.data = null
            response.error_message ="An Error occured please try again later"
            if(error instanceof FirebaseError){
                response.error_message = capitalizeWord(error.code.replace("auth/",""))
            }
        }
        return response
    }
}

export default new FirebaseAuthService as FirebaseAuthService