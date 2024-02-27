"use client"
import MainLayout from "../components/MainLayout";
import MercoaPage from "./components/Mercoa";

export default function Invoices(){

    return(
        <MainLayout active="inbox">
                <div className="p-3 md:p-6">
                <MercoaPage/>
                </div>
        </MainLayout>
    )
}