"use client"

import { Skeleton } from "antd"

export default function InboxLoader(){
    return(
        <div className="mt-12">
        {Array(7).fill("").map((item,i)=>{
                return(
                <div className="mt-4" key={`inbox-loader-${item}-${i}`}>
                    <Skeleton.Button active block style={{height:"15px"}}/>
                    <div className="w-1/2 mt-1">
                    <Skeleton.Button active block style={{height:"15px"}}/>
                    </div>
                </div>
                )
            })}
        </div>
    )
}