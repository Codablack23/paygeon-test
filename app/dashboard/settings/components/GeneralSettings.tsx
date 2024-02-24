"use client"
import { ThemeContext } from "@/app/contexts/ThemContext";
import { Switch } from "antd";
import dynamic from "next/dynamic";
import { useContext } from "react";
import helpcenter from "@/public/lord-icons/help-center.json"
import JiraScript from "@/app/utils/JiraScript";
const LordIcon:any = dynamic(()=>import('../../../components/LordIcon'),{
    ssr:false
  })

export default function GeneralSettings(){
    const {toggleTheme,darkMode} = useContext(ThemeContext)
    return(
        <div className="p-2 my-4">
            <p className="font-bold text-black text-xl">Appearance</p>
            <ul className="my-2 rounded-md">
                <li className="flex rounded-t-md component-500 p-4 items-center justify-between">
                    <p className="text-base text-light font-semibold">Dark Mode</p>
                    <Switch
                    className="bg-light"
                    checked={darkMode}
                    onClick={toggleTheme}
                    />
                </li>  
                <button className="report-problem-btn px-4 flex items-center gap-2 my-4 py-3 text-lg rounded-md component-500">
                    <LordIcon 
                    color={darkMode?"#fff":"#000"}
                    icon={helpcenter}
                    />
                    <span>Report A Problem</span>
                </button>
                <JiraScript/>
            </ul>
        </div>
    )
}