"use client"
import {LinkComponentProps, SideBarProps } from "@/app/interfaces";
import { bottomBarLinks } from "@/app/utils/constants";
import Link from "next/link";
import { useState } from "react";


const ButtonLink=(props:LinkComponentProps)=>{
     const {link} = props;
    const active = "bg-theme"
    const inActive = "component-500"
    const isActive = props.active === link.slug
    return (
      <div className="flex-1">
          <Link href={link.url}>
          <button id={link.id} className={`p-4 ${isActive?active:inActive} flex items-center w-full justify-center rounded-md`}>
            {isActive?
            link.tabActiveIcon
            :link.icon}
          </button>
        </Link>
      </div>
    )
}
export default function BottomBar(props:SideBarProps){
    return (
        <div className="fixed card md:hidden bottom-0 w-full h-20 p-2 component-500 z-[50]">
            <div className="flex items-center gap-2">
                {bottomBarLinks.map(link=>(
                    <ButtonLink
                     key={link.name}
                     link={link}
                     active={props.active}
                    />
                ))}
            </div>
        </div>
    )
}