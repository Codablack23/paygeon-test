import { useState } from "react";

export default function usePasswordVisibility(){
    const [shown,setShown] = useState(false)

    const togglePasswordShown=()=>{
        setShown(prev=>!prev)
    }

    return {shown,togglePasswordShown}
}