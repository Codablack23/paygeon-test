"use client"

import { ThemeContext } from "@/app/contexts/ThemContext"
import { useContext } from "react"

export default function useTheme(){
    const {darkMode} = useContext(ThemeContext)

    return {darkMode}
}