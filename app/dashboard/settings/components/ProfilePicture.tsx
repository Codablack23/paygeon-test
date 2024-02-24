"use client"

import { AuthContext } from "@/app/contexts/AuthContext"
import { Image, Spin, message } from "antd"
import dynamic from "next/dynamic"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import account from "@/public/lord-icons/account.json"
import FirebaseStorage from "@/app/services/FirebaseStorage"
import FirebaseAuth from "@/app/services/FirebaseAuth"
import { User } from "firebase/auth"
import { ThemeContext } from "@/app/contexts/ThemContext"

const LordIcon = dynamic(()=>import('../../../components/LordIcon'),{
    ssr:false
  })

export default function ProfilePicture(){
    const {user} = useContext(AuthContext)
    const {darkMode} = useContext(ThemeContext)
    const [photo,setPhoto] = useState<string | null>(null)
    const [loading,setLoading] = useState(false)
    const [messageApi,contextHolder] = message.useMessage()
    useEffect(()=>{
        if(user){
            console.log(user)
            setPhoto(user.photoURL)
        }
    },[])
    async function handleSelect(e:ChangeEvent<HTMLInputElement>){
        const file = (e.target.files as FileList)[0]
        if(file){
            setLoading(true)
        const response = await FirebaseStorage.uploadFile(file)
        if(response.status === "success"){
            const updateResponse = await FirebaseAuth.updateProfile(user as User,{
                photoURL:response.downloadURL
            })
            setLoading(false)
            if(updateResponse.status === "success"){
                setPhoto(response.downloadURL as string)
                return messageApi.success("Photo updated successfully")
            }
            return messageApi.error(updateResponse.error_message)
        }
        setLoading(false)
        messageApi.error(response.error_message)
        }
    }
    return(
        <>
        {contextHolder}
            <div className="relative rounded-full flex items-center justify-center component-800 h-[150px] w-[150px] mx-auto">
                {photo
                ?<Image src={photo} width={"150px"} height={"150px"} className="rounded-full"/>
                :<LordIcon color={darkMode?"#fff":"#000"} size={150} icon={account}/>}
                <div>
                {loading
                ?(
                    <label className="h-[35px] absolute right-[5px] bottom-[5px] w-[35px] main-component card rounded-full flex justify-center items-center">
                      <Spin size={"small"}/>
                    </label>
                )
                :(
                    <label htmlFor="upload" className="h-[35px] absolute right-[5px] bottom-[5px] w-[35px] main-component card rounded-full flex justify-center items-center">
                    <i className="bi bi-camera text-xl"></i>
                    </label>
                )}
                <input onChange={handleSelect} type="file" id="upload" name="upload" className="hidden" />
                </div>
            </div>
        </>
    )
}