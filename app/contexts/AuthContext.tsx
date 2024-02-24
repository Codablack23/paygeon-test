"use client"

import { createContext } from "react";
import { AuthContextObject, ContextProviderProps } from "../interfaces";
import useAuthData from "./useAuthData";

export const AuthContext = createContext<AuthContextObject>({
    loading:false,
    user:null,
    entity:null,
    updateUserData(newData) {}
})

export default function AuthContextProvider(props:ContextProviderProps){
    const authValues = useAuthData()
        return(
            <AuthContext.Provider value={authValues}>
                {props.children}
            </AuthContext.Provider>
        )
}