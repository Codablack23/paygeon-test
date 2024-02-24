import { AuthContext } from "@/app/contexts/AuthContext";
import { Image, Popover } from "antd";
import Link from "next/link";
import { useContext } from "react";

interface Props{
    imageURL:string | null
}

function Content(){
    return(
        <div className="mr-2 p-1">
            <Link href={"/dashboard/settings"}><button className="w-full bg-theme rounded-md text-white p-2">Settings</button></Link>
            <button className="w-full p-2">Logout</button>
        </div>
    )
}
export default function ProfilePicture(props:Props){
    const {imageURL} = props
    return(
        <Popover className="component-500" content={<Content/>}>
            {imageURL
            ?<div className="h-7 w-7 rounded-full bg-gray-200">
                <Image
                src={imageURL}
                alt={imageURL}
                className="rounded-full w-full"
                />
            </div>
            :<div className="h-7 w-7 rounded-full flex items-center justify-center">
                <i className="bi bi-person-circle text-2xl md:text-3xl text-light"></i>
            </div>}
        </Popover>
    )
}