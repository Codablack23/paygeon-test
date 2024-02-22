import { FormEventHandler, useState } from "react";
import FirebaseAuthService from '@/app/services/FirebaseAuth'
import { message, notification } from "antd";
import MercoaService from "@/app/services/MercoaService";
import { User, deleteUser } from "firebase/auth";

export default function useAccountsForm(){
        const [email,setEmail] = useState("")
        const [name,setName] = useState("")
        const [loading,setLoading] = useState(false)
        const [password,setPassword] = useState("")
        const [confirmPassword,setConfirmPassword] = useState("")
        const [notify,contextHolder] = notification.useNotification()

        const handleEmailInput=(value:string)=>{
            setEmail(value)
        } 
        const handleNameInput=(value:string)=>{
            setName(value)
        }
        const handlePasswordInput=(value:string)=>{
            setPassword(value)
        }
        const handleConfirmPasswordInput=(value:string)=>{
            setConfirmPassword(value)
        }
        const handleSignIn:FormEventHandler<HTMLFormElement>=async(e)=>{
            e.preventDefault()
            setLoading(true)
            const response = await FirebaseAuthService.signIn(email,password)
            if(response.status === "success"){
                    window.location.assign("/dashboard/inbox")
                    return null

            }
            setLoading(false)
            notify.error({
                message:"An Error Occured",
                description:response.error_message
            })
        }
        const handleSignUp:FormEventHandler<HTMLFormElement>=async(e)=>{
            e.preventDefault()
            if(!name){
               return message.warning("Please provide your business Name")
            }
            if(name.length < 3){
                return message.warning("Please provide your business Name with atleast 5 characters")
            }
            if(password !== confirmPassword){
                    return message.info("Passwords do not match")
            }
            setLoading(true)
            // console.log({email,password})
            const response = await FirebaseAuthService.signUp(email,password)
            if(response.status === "success"){
                const user = response.user as User
                const mercoaRes = await MercoaService.createEntity(user.uid,email,name)
                if(mercoaRes.status === "success"){
                    notify.success({
                        message:"Sign up Success",
                        description:`${response.message}. You will now be redirected to the dashboard`
                    })
                    setTimeout(()=>{
                        window.location.assign("/dashboard/inbox")
                    },5000)
                    return null
                }
                await deleteUser(user)
                setLoading(false)
                notify.error({
                    message:"An Error Occurred",
                    description:"it seems an error occurred and we are unable to create a account please try again later"
                })
                return null;
            }
            setLoading(false)
            notify.error({
                message:"An Error Occured",
                description:response.error_message
            })
        }

        return {
            loading,
            email,
            handleEmailInput,
            name,
            handleNameInput,
            password,
            handlePasswordInput,
            confirmPassword,
            handleConfirmPasswordInput,
            handleSignIn,
            handleSignUp,
            contextHolder
        }
}