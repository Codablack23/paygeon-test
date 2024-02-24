"use client"

import { createContext, useEffect, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const ThemeContext = createContext({
    darkMode:false,
    toggleTheme:()=>{}
})

export default function ThemeContextProvider(props:ContextProviderProps){
    const [darkMode,setDarkMode] = useState(false)
    const toggleTheme=()=>{
        if(!darkMode){
            localStorage.setItem("theme","dark")
        }else{
            localStorage.setItem("theme","light")
        }
        setDarkMode(prev=>!prev)
    }
    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if(theme){
            setDarkMode(theme === "dark")
        }
    },[])
    return(
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}