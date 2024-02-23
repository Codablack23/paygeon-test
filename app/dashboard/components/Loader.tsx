"use client"

import { Skeleton } from "antd"

export default function PageLoader(){
    return (
        <div className="p-4">
            <header className="flex items-center gap-2 justify-between">
                <div className="flex-1">
                    <Skeleton.Button active block style={{height:"40px"}}/>
                </div>
                <Skeleton.Avatar active size={40} shape="circle"/>
            </header>
            <div className="mt-4">
                <header className="grid grid-cols-4 items-center gap-2">
                    {Array(4).fill("").map((item,i)=>{
                        return(
                        <div key={`page-loader-${item}-${i}`}>
                            <Skeleton.Button active block style={{height:"100px"}}/>
                            <div className="mt-2">
                            <Skeleton
                            active
                            paragraph={{
                                rows:1
                            }}
                            />
                            </div>
                        </div>
                        )
                    })}
                </header>
                <div className="mt-12">
                {Array(6).fill("").map((item,i)=>{
                        return(
                        <div className="mt-4" key={`page-loader-again-${item}-${i}`}>
                            <Skeleton.Button active block style={{height:"15px"}}/>
                            <div className="w-1/2 mt-1">
                            <Skeleton.Button active block style={{height:"15px"}}/>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}