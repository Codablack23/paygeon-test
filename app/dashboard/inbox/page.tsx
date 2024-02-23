"use client"
import MainLayout from "../components/MainLayout";
import MercoaPage from "./components/Mercoa";

export default function Invoices(){

    return(
        <MainLayout active="inbox">
            <div className="max-h-screen overflow-y-auto">
                <MercoaPage/>
            </div>
        </MainLayout>
    )
}