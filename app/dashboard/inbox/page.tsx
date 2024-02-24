"use client"
import MainLayout from "../components/MainLayout";
import MercoaPage from "./components/Mercoa";

export default function Invoices(){

    return(
        <MainLayout active="inbox">
                <MercoaPage/>
        </MainLayout>
    )
}