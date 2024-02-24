"use client"

import { useContext, useState } from "react"
import GeneralSettings from "./GeneralSettings"
import ProfileSettings from "./ProfileSettngs"
import { ConfigProvider } from "antd"
import { ThemeContext } from "@/app/contexts/ThemContext"


export default function SettingsTab(){
    const [active,setActive] = useState("1")
    const {darkMode} = useContext(ThemeContext)
    const handleSelectTab=(key:string)=>{
        return ()=>{
            setActive(key)
        }
    }
        return(
            <div>
                <header className=" sticky top-0 flex items-center gap-2 w-full">
                    <button onClick={handleSelectTab("1")} className={`p-2 px-4 animate rounded-md ${active === "1"?"bg-black text-white":"bg-transparent"}`}>General Settings</button>
                    <button onClick={handleSelectTab("2")} className={`p-2 px-4 animate rounded-md ${active === "2"?"bg-black text-white":"bg-transparent"}`}>Profile Settings</button>
                </header>
                <div>
                    {active==="1"
                    ?<GeneralSettings/>
                    :<ProfileSettings/>
                    }
                </div>
            </div>
        )
}