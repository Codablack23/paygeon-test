"use client";

import { DashboardLinkObject, SideBarProps } from "@/app/interfaces";
import { dashboardLinks } from "@/app/utils/constants";
import { Image } from "antd";
import Link from "next/link";


function SidebarLink(props:{
    link:DashboardLinkObject,
    active:string
}){
    const {link} = props;
    const active = "text-black border-r-4 border-theme"
    const inActive = "text-light"
    const isActive = props.active === link.slug
    if(link.type === "button"){
        return (
            <button
            onClick={link.handler}
            className={`w-full ${link.className} inline-flex items-center gap-4 font-bold py-4 text-left ${isActive?active:inActive}`}>
            {isActive?link.activeIcon:link.icon}
            {link.name}
            </button>
        )
    }
    return (
        <Link href={link.url}>
        <button
        className={`w-full ${link.className} inline-flex items-center gap-4 font-bold py-4 text-left ${isActive?active:inActive}`}>
        {isActive?link.activeIcon:link.icon}
        {link.name}
        </button>
    </Link>
    )
}

export default function Sidebar(props:SideBarProps){
    return (
        <div className="sidebar hidden md:block bg-light-500 pl-8 py-8 fixed top-0 left-0 h-full w-[250px]">
            <Image
            src="/images/icons/logo.png"
            preview={false}
            className="mb-8"
            />
            <p className="mb-4 font-light">Navigation</p>
            {dashboardLinks.map(link=>(
                <SidebarLink
                link={link}
                key={link.name}
                active={props.active}
                />
           ))}
        </div>
    )
}