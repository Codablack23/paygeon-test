import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { Data } from "../interfaces";
import {Mercoa} from  "@mercoa/javascript"
import MercoaService from "../services/MercoaService";

export default function useAuthData(){
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState<User|null>(null)
    const [entity,setEntity] = useState<Mercoa.EntityWithPaymentMethodResponse|null>(null)

    useEffect(()=>{
        async function getMercoaEntity(foreignKey:string){
            const response = await MercoaService.getEntity(foreignKey)
            if(response.status === "success"){
                setEntity(response.entity)
            }
        }
        onAuthStateChanged(auth,async (userData)=>{
            if(userData){
                setUser(userData)
                getMercoaEntity(userData.uid)
                setLoading(false)
            }
        })
    },[])
    useEffect(()=>{
    },[user])

    return {
        loading,
        user,
        entity,
        updateUserData(newData:User | null){
            setUser(newData)
        }
    }
}