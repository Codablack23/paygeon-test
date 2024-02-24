"use client"
import { HeaderProps } from "@/app/interfaces";
import SearchBar from "./SearchBar";
import MagicbellButton from "./MagicBellButton";
import ProfilePicture from "./ProfilePicture";
import { useContext } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";
import { User } from "firebase/auth";
import { ConfigProvider } from "antd";
import { ThemeContext } from "@/app/contexts/ThemContext";



export default function DashboardHeader(props:HeaderProps){
    const {user} = useContext(AuthContext)
    return(
        <div className="flex items-center sticky top-0 main-component z-[30] md:px-6 p-4">
            <p className="font-black text-lg md:text-2xl capitalize">{props.pageTitle}</p>
            <div className="ml-auto gap-2 flex items-center">
                <SearchBar/>
                <MagicbellButton
                email={(user as User).email as string}
                />
                    <ProfilePicture
                    imageURL={(user as User).photoURL}
                    />
            </div>
        </div>
    )
}