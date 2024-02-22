"use client"

import { Skeleton } from "antd"

export default function PerksLoader(){
    return (
        <div>
            <Skeleton.Button block active style={{height:"100px"}}/>
            <div className="my-4">
                    <Skeleton
                    active
                    paragraph={{rows:6}}
                    />
                </div>
            <div className="my-4 gap-2 grid md:grid-cols-3">
                <div>
                 <Skeleton.Button block active style={{height:"200px"}}/>
                </div>
                <div>
                 <Skeleton.Button block active style={{height:"200px"}}/>
                </div> 
                <div>
                 <Skeleton.Button block active style={{height:"200px"}}/>
                </div>
            </div>
        </div>
    )
}