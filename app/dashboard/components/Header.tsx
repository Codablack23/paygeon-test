import { HeaderProps } from "@/app/interfaces";
import SearchBar from "./SearchBar";
import MagicbellButton from "./MagicBellButton";
import ProfilePicture from "./ProfilePicture";



export default function DashboardHeader(props:HeaderProps){
    return(
        <div className="flex items-center sticky top-0 bg-white px-6 p-4">
            <p className="font-black text-2xl capitalize">{props.pageTitle}</p>
            <div className="ml-auto gap-2 flex items-center">
                <SearchBar/>
                <MagicbellButton/>
                <ProfilePicture/>
            </div>
        </div>
    )
}