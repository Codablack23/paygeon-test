'use client'
import { MainLayoutProps } from "@/app/interfaces";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import PageLoader from "./Loader";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";
import BottomBar from "./BottomBar";
import JiraScript from "@/app/utils/JiraScript";
import { ThemeContext } from "@/app/contexts/ThemContext";
import { ConfigProvider } from "antd";

export default  function MainLayout(props:MainLayoutProps){
    const {loading,user} = useContext(AuthContext)
    const {darkMode} = useContext(ThemeContext)
    useEffect(()=>{
        if(!loading && user === null){
            window.location.assign("/accounts/login")
        }
    },[loading,user])
    return(
        <body className={`app ${darkMode?"dark":"light"}`}>
        <main className={`app ${darkMode?"dark":"light"}`}>
           <ConfigProvider
                theme={{
                    components:{
                      Message:{
                        contentBg:darkMode?"#333333":"#fff",
                      }
                    },
                    token:{
                        colorBgElevated:darkMode?"#333333":"#ffffff",
                    }
                }}
                >
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
                    <div className="">
                        {props.children}
                    </div>
                </section>}
            </ConfigProvider>
         
        </main>
        </body>
    )
}