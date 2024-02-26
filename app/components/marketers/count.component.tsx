'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

const Count:React.FC<{className:string;count:number,title:string}> = ({className,count,title}) => {

  const [nr,setNr] = useState<number>(0)
  const [isPlaying,setIsPlaying] = useState<boolean>(false)

  const mainRef = useRef() as MutableRefObject<HTMLDivElement>

  const handlePlay = () =>{
    const rect = mainRef.current?.getBoundingClientRect()
    if(rect?.top < 400 && !isPlaying){
      setIsPlaying(true)
    }  
  }


  const handleCount = () =>{
    if(isPlaying){     
      if(nr === 0){
          let time = 0
          for(let i = 0; i < count;i+=0.115121){
            setTimeout(() => {
              setNr(Number(i.toPrecision(7)))
            }, time += 100);
          }
        }
      }
    }

  useEffect(()=>{
    window.addEventListener('scroll',()=>handlePlay())
  },[])

  useEffect(()=>{
    handleCount()
  },[isPlaying])

  return (
    <div className={`marketers-count m-2 p-5 rounded-lg flex flex-col justify-center items-center bg-neutral-950 ${className}`} ref={mainRef}>
      <h2 className="text-center text-5xl my-2 font-bold">{nr.toPrecision(7)}</h2>
      <h2 className="text-center text-2xl font-bold">{title}</h2>
    </div>
  )
}

export default Count
