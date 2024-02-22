"use client"
import '@mercoa/react/dist/style.css'
import { AuthContext } from "@/app/contexts/AuthContext";
import MercoaService from "@/app/services/MercoaService";
import { MercoaSession } from "@mercoa/react";
import { useContext, useEffect, useState } from "react";
import InboxLoader from "./InboxLoading";

export default function MercoaPage(){
    const [loading,setLoading] = useState(true);
    const [token,setToken] = useState<string|null>(null)
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        async function getToken(){
            if(user){
                const res = await MercoaService.generateUserJWT(user.uid)
                setToken(res)
                setLoading(false)
            }
        }
        getToken()

    },[user])

    return (!loading && token )
    ?<MercoaSession token={token?token:""}></MercoaSession>
    :<InboxLoader/>
}