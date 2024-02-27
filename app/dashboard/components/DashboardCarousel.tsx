"use client"
import { ThemeContext } from "@/app/contexts/ThemContext";
import { CarouselItemProps } from "@/app/interfaces";
import { updates } from "@/app/utils/constants/updates";
import { Image } from "antd";
import { useContext, useEffect, useRef, useState } from "react"



function Item(props:CarouselItemProps){
    const timing = {
        duration: 500,
        iterations: 1,
      };
    const ref = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        ref.current?.animate([
            {opacity:"0"},
            {opacity:"1"},
        ],timing)
    },[props.active])
    return (
        <div ref={ref} className="h-[410px] rounded-lg relative card">
            <Image
            height={"100%"}
            width={"100%"}
            className="h-[210px] object-cover w-full rounded-lg"
            src={props.imageUrl}
            alt={props.title}
            preview={false}
            />
            <div className="custom-overlay flex flex-col justify-between p-4 rounded-lg absolute top-0 w-full h-full">
                <header className="text-right">
                <button className="h-8 w-8 rounded-full bg-gray-200"></button>
                </header>
                <div className="p-2">
                    <p className="uppercase font-bold">{props.title}</p>
                    <p className="capitalize font-bold text-xl my-4">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default function DashboardCarousel(){
    const [active,setActive] = useState(0)
    const handleSelectItem=(index:number)=>{
        return ()=>{
            setActive(index)
        }
    }
    const {darkMode} = useContext(ThemeContext)
    const itemList = updates.map(update=>(
        <Item
        {...update}
        active={active}
        />
    ))
    const searchItem = itemList.find((item,i)=>active === i )
    const activeItem = searchItem?searchItem:null
    const next=()=>{
        if(active >= itemList.length - 1){
            return null
        }
        setActive(prev=>prev+1)
    }
    const prev=()=>{
        if(active < 1){
            return null
        }
        setActive(prev=>prev-1)
    }
    return(
    <div className="">
        {activeItem}
        <div className="flex  my-3 items-center justify-between">
        <button disabled={active < 1} onClick={prev} className={`disabled:opacity-50 disabled:cursor-not-allowed component-light card h-8 rounded-full w-8 flex items-center justify-center`}>
            <i className="bi bi-arrow-left text-xl text-theme"></i>
        </button>

        <div className="flex gap-2">
            {itemList.map((item,index)=>(
                <button key={`carousel-indicator-${index}`} onClick={handleSelectItem(index)} className={`${active === index?darkMode?"bg-white":"dark":darkMode?"bg-gray-600":"bg-gray-200"} h-3 rounded-full w-3`}></button>
            ))}
        </div>
        <button disabled={active >= itemList.length - 1} onClick={next} className={`disabled:opacity-50 disabled:cursor-not-allowed component-light card h-8 rounded-full w-8 flex items-center justify-center `}>
            <i className="bi bi-arrow-right text-xl text-theme"></i>
        </button>
        </div>
    </div>
    )
}