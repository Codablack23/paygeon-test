"use client";

import { ThemeContext } from "@/app/contexts/ThemContext";
import { DashboardLinkObject, SideBarProps } from "@/app/interfaces";
import { dashboardLinks } from "@/app/utils/constants";
import { Image } from "antd";
import Link from "next/link";
import { useContext } from "react";


function SidebarLink(props:{
    link:DashboardLinkObject,
    active:string
}){
    const {darkMode} = useContext(ThemeContext)
    const {link} = props;
    const active = "border-r-4 border-theme"
    const inActive = "text-light"
    const isActive = props.active === link.slug
    if(link.type === "button"){
        return (
            <button
            onClick={link.handler}
            id={link.id}
            className={`w-full ${link.className} inline-flex items-center gap-4 font-bold py-4 text-left ${isActive?active:inActive}`}>
            {isActive?link.activeIcon:link.icon}
            {link.name}
            </button>
        )
    }
    return (
        <Link href={link.url}>
        <button
        id={link.id}
        className={`w-full ${link.className} inline-flex items-center gap-4 font-bold py-4 text-left ${isActive?active:inActive}`}>
        {isActive
        ?darkMode?link.darkModeActiveIcon:link.activeIcon
        :link.icon}
        {link.name}
        </button>
    </Link>
    )
}


export default function Sidebar(props:SideBarProps){
    const {darkMode} = useContext(ThemeContext)
    return (
        <>
        <div className="sidebar hidden md:block component-500 pl-8 py-8 fixed top-0 left-0 z-[100] h-full w-[250px]">
           <div className="max-w-[150px]">
            {darkMode?
            <Image
            src="/images/paygeon-logo-dark.svg"
            preview={false}
            className="mb-8 w-full"
            />
            :<Image
                src="/images/paygeon-logo.svg"
                preview={false}
                className="mb-8 w-full"
                />}
           </div>
            <p className="mb-4 mt-10 text-lg font-bold">Navigation</p>
            {dashboardLinks.map(link=>(
                <SidebarLink
                link={link}
                key={link.name}
                active={props.active}
                />
           ))}
        </div>
        </>
    )
}