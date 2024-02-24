"use client";
import JiraScript from "@/app/utils/JiraScript";
import MainLayout from "../components/MainLayout";
import SettingsTab from "./components/SettingsTab";
import SettingsLoader from "./components/SettingsLoader";


export default function Page(){
        
        return(
            <MainLayout active="settings">
                {/* <SettingsLoader/> */}
                <SettingsTab/>
            </MainLayout>
        )
}