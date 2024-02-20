'use client'
import { MainLayoutProps } from "@/app/interfaces";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import PageLoader from "./Loader";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";

export default  function MainLayout(props:MainLayoutProps){
    const {loading,user} = useContext(AuthContext)

    useEffect(()=>{
        console.log(loading,user)
        if(!loading && user === null){
            window.location.assign("/accounts/login")
        }
    },[loading,user])
    return(
        <main>
            <Sidebar active={props.active}/>
            {loading || user === null
            ?<section className="ml-[25%]">
                <PageLoader/>
            </section>
            :<section className="ml-[25%]">
            <DashboardHeader
            pageTitle={props.active}
            />
            <div className="p-6">
            {props.children}
            </div>
            </section>}
        </main>
    )
}