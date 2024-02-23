"use client"
import { Player } from "@lordicon/react"
import { useRef, useEffect } from "react"

interface Data{
    [key:string]:any
  }interface LordIconProps{
    icon:Data,
    color?:string
  }
  
  
  export default function LordIcon(props:LordIconProps){
      const playerRef = useRef<Player>(null)
      const animateIcon = ()=>{
          playerRef.current?.playFromBeginning()
      }
      useEffect(()=>{
          playerRef.current?.playFromBeginning()
      },[])
     return (
      <div onMouseEnter={animateIcon}>
          <Player
          ref={playerRef}
          icon={props.icon}
          size={24}
          colorize={props.color?props.color:"#000000"}
          />
      </div>
     )
  }