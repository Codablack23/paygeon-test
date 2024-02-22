"use client"

import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/MainLayout";
import PerksLoader from "./Loader";

export default function Page(){
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [loading,setLoading] = useState(true)
    return (
        <MainLayout active="perks">
            {loading?<PerksLoader/>:null}
                <iframe
                ref={iframeRef}
                width="100%"
                height="100vh"
                onLoad={()=>setLoading(false)}
                style={{
                    minHeight:"100vh",
                    display:loading?"none":"block"
                }}
                src="https://v2-embednotion.com/40b259eafeed4b21ac99345303a634f3?v=e337bfd843cd412681404b58dd6bb3d7&pvs=4"
                title="NachoNacho PerkHub">
                </iframe>
        </MainLayout>
    )
}