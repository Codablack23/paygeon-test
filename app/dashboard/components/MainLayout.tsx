'use client'
import { MainLayoutProps } from "@/app/interfaces";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import PageLoader from "./Loader";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";
import BottomBar from "./BottomBar";
import JiraScript from "@/app/utils/JiraScript";

export default  function MainLayout(props:MainLayoutProps){
    const {loading,user} = useContext(AuthContext)

    useEffect(()=>{
        if(!loading && user === null){
            window.location.assign("/accounts/login")
        }
    },[loading,user])
    return(
        <main>
            <JiraScript/>
            <BottomBar active={props.active}/>
            <Sidebar active={props.active}/>
            {loading || user === null
            ?<section className="md:ml-[250px]">
                <PageLoader/>
            </section>
            :<section className="md:ml-[250px] pb-20 md:pb-0">
                <DashboardHeader
                    pageTitle={props.active}
                />
                <div className="p-3 md:p-6">
                    {props.children}
                </div>
            </section>}
        </main>
    )
}