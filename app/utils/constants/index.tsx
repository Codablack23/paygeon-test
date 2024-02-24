"use client"
import { DashboardLinkObject, IntegrationDataObject } from "@/app/interfaces";
import { iconData as icons } from "./iconData";
import dynamic from "next/dynamic";
const baseRoute = "/dashboard"

  const LordIcon:any = dynamic(()=>import('../../components/LordIcon'),{
    ssr:false
  })
export const dashboardLinks:DashboardLinkObject[] = [
    {
        url:`${baseRoute}/inbox`,
        slug:"inbox",
        name:"Inbox",
        icon:<LordIcon color="#747A80" icon={icons.inbox}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.inbox}/>,
        activeIcon:<LordIcon icon={icons.inbox}/>
    },
    {
        url:`${baseRoute}/perks`,
        slug:"perks",
        name:"Perks",
        icon:<LordIcon color="#747A80" icon={icons.compare}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.compare}/>,
        activeIcon:<LordIcon icon={icons.compare}/>
    },
    {
        url:`${baseRoute}/settings`,
        slug:"settings",
        name:"Settings",
        icon:<LordIcon color="#747A80" icon={icons.settings}/>,
        activeIcon:<LordIcon icon={icons.settings}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.settings}/>
    },
]
export const bottomBarLinks:DashboardLinkObject[] = [
    {
        url:`${baseRoute}/inbox`,
        slug:"inbox",
        name:"Inbox",
        icon:<LordIcon color="#747A80" icon={icons.inbox}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.inbox}/>,
        activeIcon:<LordIcon icon={icons.inbox}/>
    },
    {
        url:`${baseRoute}/perks`,
        slug:"perks",
        name:"Perks",
        icon:<LordIcon color="#747A80" icon={icons.compare}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.compare}/>,
        activeIcon:<LordIcon icon={icons.compare}/>
    },
    {
        url:`${baseRoute}/settings`,
        slug:"settings",
        name:"Settings",
        icon:<LordIcon color="#747A80" icon={icons.settings}/>,
        activeIcon:<LordIcon icon={icons.settings}/>,
        tabActiveIcon:<LordIcon color="#fff" icon={icons.settings}/>
    },
]


