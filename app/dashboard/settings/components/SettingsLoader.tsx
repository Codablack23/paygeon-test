"use client"

import { Skeleton } from "antd"


export default function SettingsLoader(){
    return(
        <div>
            <header className="flex gap-2 my-2">
                <div>
                <Skeleton.Button active style={{
                    height:"40px",
                    minWidth:"160px"
                }}/>
                </div>  
                <div>
                <Skeleton.Button active style={{
                    height:"40px",
                    minWidth:"160px"
                }}/>
                </div>
            </header>
           {
            new Array(3).fill("").map((item,i)=>(
                <div key={`settings-loader-${item}-${i}`} className="mb-8">
                <div>
                     <Skeleton.Button active block style={{
                         height:"10px",
                     }}/>
                 </div> 
                 <div>
                     <Skeleton.Button active block style={{
                         height:"120px",
                     }}/>
                 </div>
                </div>
            ))
           }
        </div>
    )
}