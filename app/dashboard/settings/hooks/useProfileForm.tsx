import { AuthContext } from "@/app/contexts/AuthContext";
import { Data } from "@/app/interfaces";
import FirebaseAuth from "@/app/services/FirebaseAuth";
import MercoaService from "@/app/services/MercoaService";
import { message } from "antd";
import { User } from "firebase/auth";
import { FormEventHandler, useContext, useEffect, useState } from "react";

export default function useProfileForm(){
    const {user,entity} = useContext(AuthContext)
    const [readOnly,setReadOnly] = useState(true)
    const [loading,setLoading] = useState(false)
    const [phoneNumber,setPhoneNumber] = useState<string | null>("")
    const [fullName,setFullname] = useState<string | null>("")
    const [legalName,setLegalName] = useState<string | null>("")
    const [email,setEmail] = useState<string | null>("")

    const [messageApi,contextHolder] = message.useMessage()
    function editProfile(){
        setReadOnly(false)
    }

    useEffect(()=>{
        if(user){
            setPhoneNumber(user.phoneNumber)
            setFullname(user.displayName)
        }
        console.log(entity)
        if(entity){
            setLegalName(entity.name)
            setEmail(entity.email)
        }
    },[])
    function handlePhoneInput(value:string){
        setPhoneNumber(value)
    }
    function handleFullNameInput(value:string){
        console.log(value)
        setFullname(value)
    }

    const handleSubmit:FormEventHandler<HTMLFormElement>=async(e)=>{
        e.preventDefault()
        console.log(fullName)
        setLoading(true)
        const response = await FirebaseAuth.updateProfile(user as User,{
            displayName:(fullName as string)
        })
        setLoading(false)
        if(response.status === "success"){
            return messageApi.success("Profile updated successfully")
        }
        return messageApi.error(response.error_message)
    }
    const handleBusinessSubmit:FormEventHandler<HTMLFormElement>=async(e)=>{
        e.preventDefault()
       if(entity){
        console.log(legalName)
        setLoading(true)
        const response = await MercoaService.updateEntity(entity.id,{
            name:legalName as string,
            email:email as string
        })
        setLoading(false)
        if(response.status === "success"){
            return messageApi.success("Profile updated successfully")
        }
        return messageApi.error(response.error_message)
       }
    }

    return {
        phoneNumber,
        contextHolder,
        loading,
        handlePhoneInput,
        fullName,
        handleFullNameInput,
        editProfile,
        readOnly,
        handleSubmit,
        legalName,
        setLegalName,
        email,
        setEmail,
        handleBusinessSubmit
    }
}