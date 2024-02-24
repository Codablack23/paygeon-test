"use client"
import {Player}  from "@lordicon/react/"
import dynamic from "next/dynamic"
import { useRef, useEffect, useState } from "react"

interface Data{
    [key:string]:any
  }interface LordIconProps{
    icon:Data,
    color?:string,
    size?:number
  }
   
  export default function LordIcon(props:LordIconProps){
      const [shown,setShown] = useState(false)
      const playerRef = useRef<Player>(null)
      const animateIcon = ()=>{
          playerRef.current?.playFromBeginning()
      }
      useEffect(()=>{
         if(document){
            setShown(true)
            playerRef.current?.playFromBeginning()
         }
      },[])
     return (
      <div onMouseEnter={animateIcon}>
          {shown?
          <Player
          ref={playerRef}
          icon={props.icon}
          size={props.size?props.size:24}
          colorize={props.color?props.color:"#000000"}
          />
          :null}
      </div>
     )
  }