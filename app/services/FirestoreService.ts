import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { FirebaseError } from "firebase/app";
import { FireStoreResponse } from "../interfaces";



interface Data{
    [key:string]:any
}

class FirestoreService{
    async getData(id:string){
        const response:FireStoreResponse = {
            status:"pending",
            error:null,
            data:null
        }
        try {
            const docRef = doc(db,"completedTask",id)
            const snapshot = await getDoc(docRef)
            if(snapshot.exists()){
                response.status = "success"
                response.data = snapshot.data()
            }
        } catch (error) {
            response.status = "failed"
            response.error = error
            response.error_message = "an Error occured please try again later"
            if(error instanceof FirebaseError){
                response.error_message = error.code
            }
        }
        return response
    }
    async setDoc(dbCollection:string,id:string,data:Data){
        const response:FireStoreResponse = {
            status:"pending",
            error:null,
            data:null
        }
        try {
            const collectionRef = collection(db,dbCollection)
            const docRef = doc(collectionRef,id)
            setDoc(docRef,data)
            response.status = "success"
        } catch (error) {
            response.status = "failed"
            response.error = error
            response.error_message = "an Error occured please try again later"
            if(error instanceof FirebaseError){
                response.error_message = error.code
            }
        }
        return response
    }
}

export default new FirestoreService() as FirestoreService