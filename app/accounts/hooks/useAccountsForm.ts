import { FormEventHandler, useState } from "react";
import FirebaseAuthService from '@/app/services/FirebaseAuth'
import { message, notification } from "antd";

export default function useAccountsForm(){
        const [email,setEmail] = useState("")
        const [loading,setLoading] = useState(false)
        const [password,setPassword] = useState("")
        const [confirmPassword,setConfirmPassword] = useState("")
        const [notify,contextHolder] = notification.useNotification()

        const handleEmailInput=(value:string)=>{
            setEmail(value)
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
            setLoading(false)
            // console.log({
            //     email,
            //     password,
            //     response
            // })
            if(response.status === "success"){
                window.location.assign("/dashboard")
                return null
            }
            notify.error({
                message:"An Error Occured",
                description:response.error_message
            })
        }
        const handleSignUp:FormEventHandler<HTMLFormElement>=async(e)=>{
            e.preventDefault()
            if(password !== confirmPassword){
                    return message.info("Passwords do not match")
            }
            setLoading(true)
            // console.log({email,password})
            const response = await FirebaseAuthService.signUp(email,password)
            if(response.status === "success"){
                notify.success({
                    message:"Sign up Success",
                    description:`${response.message}. You will now be redirected to the dashboard`
                })
                setTimeout(()=>{
                    window.location.assign("/dashboard")
                },5000)
                return null
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
            password,
            handlePasswordInput,
            confirmPassword,
            handleConfirmPasswordInput,
            handleSignIn,
            handleSignUp,
            contextHolder
        }
}