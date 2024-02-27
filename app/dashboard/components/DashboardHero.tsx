"use client"
import { AuthContext } from "@/app/contexts/AuthContext";
import { Image } from "antd";
import { User } from "firebase/auth";
import { useContext } from "react";
import {Mercoa} from "@mercoa/javascript"
import Vector from "@/app/components/Vector";
import { ThemeContext } from "@/app/contexts/ThemContext";

interface Props{
    tasksLeft:number
}

export default function DashboardHero(props:Props){
    const {user,entity} = useContext(AuthContext)
    const {darkMode} = useContext(ThemeContext)
    const firebaseName = (user as User).displayName
    const mercoaData = entity as Mercoa.EntityWithPaymentMethodResponse
    const name = firebaseName?firebaseName:mercoaData?mercoaData.name :"User"
    const firstName = name.split(" ")[0]
    return (
        <div>
            <section className="section-chart">
                <div className="font-bold text-2xl text-center text-white">
                    <p >Hello {firstName}, you have</p>
                    <p className="text-7xl">{props.tasksLeft}</p>
                    <p>tasks that need your attention</p>
                </div>
                <div className="tabs-content w-tab-content">
                <div data-w-tab="1M" className="tab_pane w-tab-pane w--tab-active">
                    <div className="tab_content-wrapper">
                        <Vector darkMode={darkMode}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}