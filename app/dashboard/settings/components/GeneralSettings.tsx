import { Switch } from "antd";

export default function GeneralSettings(){
    return(
        <div className="p-2 my-4">
            <p className="font-bold text-black text-xl">Appearance</p>
            <ul className="my-2 border border-light-800 rounded-md">
                <li className="flex border-b border-b-light-800 bg-light-500 p-4 items-center justify-between">
                    <p className="text-base text-light font-semibold">Dark Mode</p>
                    <Switch/>
                </li> 
                <li className="flex border-b border-b-light-800 bg-light-500 p-4 items-center justify-between">
                    <p className="text-base text-light font-semibold">Notifications</p>
                    <Switch/>
                </li>
            </ul>
        </div>
    )
}