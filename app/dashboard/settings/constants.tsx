import { TabsProps } from "antd";
import GeneralSettings from "./components/GeneralSettings";
import ProfileSettings from "./components/ProfileSettngs";

export const TabList:TabsProps["items"]=[
    {
        key:"1",
        label:<p className="text-sm md:text-lg font-semibold">General Settings</p>,
        children:<GeneralSettings/>
    },
    {
        key:"2",
        label:<p className="text-sm md:text-lg font-semibold">Profile Settings</p>,
        children:<ProfileSettings/>
    },
]