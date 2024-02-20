import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";

export default function useAuthData(){
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState<User|null>(null)

    useEffect(()=>{
        onAuthStateChanged(auth,(userData)=>{
            setLoading(false)
            if(userData){
                setUser(userData)
            }
            
        })
    },[])

    return {
        loading,
        user,
        updateUserData(newData:User | null){
            setUser(newData)
        }
    }
}