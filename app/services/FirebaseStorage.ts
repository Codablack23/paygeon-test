import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage"
import { app, auth } from "../utils/firebaseConfig"
import { FirebaseError } from "firebase/app"

interface StorageResponse{
    status:"success"|"failed"|"pending",
    downloadURL?:string
    error:unknown|null|string|FirebaseError,
    error_message?:string
}

class FirebaseStorage{
    async uploadFile(file:File){
        const storage = getStorage(app,"paygeonv.appspot.com")
        const response:StorageResponse = {
            status:"pending",
            error:"process is still pending"
        }
        const storageRef = ref(storage,`images/${file.name}`)
        try {
            const snapshot = await uploadBytes(storageRef,file)
            console.log(snapshot)
            const downloadURL = await getDownloadURL(snapshot.ref)
            response.downloadURL = downloadURL
            response.status = 'success'
        } catch (error) {
            console.log(error)
            response.error = error
            response.error_message = "An error occurred could not upload file"
            response.status = "failed"

            if(error instanceof FirebaseError){
                response.error_message = error.code
            }
        }
        return response
    }
}

export default new FirebaseStorage() as FirebaseStorage