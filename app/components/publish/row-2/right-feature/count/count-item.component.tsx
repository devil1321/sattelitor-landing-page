'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
const Item:React.FC<{to:number,title:string}> = ({title,to}) => {

  const [isPlaying,setIsPlaying] = useState<boolean>(false)

  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const ctxRef = useRef() as MutableRefObject<any>
  
  const handleSetCanvas = () =>{
    canvasRef.current.width = wrapperRef.current.clientWidth
    canvasRef.current.height = wrapperRef.current.clientHeight
    ctxRef.current = canvasRef.current.getContext('2d')
  }

  const handleCount = () =>{
      let time = 0
      let text = 0
      let angle = 0
      if(isPlaying){
        gsap.to(wrapperRef.current,{opacity:1,duration:1})
        for(let i = 0; i < 360 - to; i++){
          setTimeout(() => {
            ctxRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
            if(i < to){
              text = i
            } 
            if(i < to){
              angle = i * 3.5
            }
            ctxRef.current.beginPath()
            ctxRef.current.lineCap = 'round'
            ctxRef.current.font = "bold 30px Verdana"
            ctxRef.current.fillStyle = 'white'
            ctxRef.current.fillText(text,canvasRef.current.width / 2 - 20,canvasRef.current.height / 2 + 10)
            ctxRef.current.strokeStyle = 'rgb(15 23 42)'
            ctxRef.current.lineWidth = 3
            ctxRef.current.arc(canvasRef.current.width / 2,canvasRef.current.height / 2,canvasRef.current.height / 2 - 5,0,Math.PI * angle / 180)
            ctxRef.current.fillStyle = 'transparent'
            ctxRef.current.fill()
            ctxRef.current.stroke()
            ctxRef.current.closePath()
          }, time += 50);
        }
      }
    }
  
    const handlePlay = () =>{
      const rect = wrapperRef.current.getBoundingClientRect()
      if(rect.top < 400 && !isPlaying){
        setIsPlaying(true)
      }  
    }


  useEffect(()=>{
    handleSetCanvas()
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll',()=>handlePlay())
    }
  },[])

  useEffect(()=>{
    handleCount()
  },[isPlaying])

  return (
    <div ref={wrapperRef} className='publish-row-2-right-feature-count-item mt-12 opacity-0 transition-all md:mt-0 w-[100px] h-[100px] mx-4 md:mx-2 '>
      <canvas ref={canvasRef} className='publish-row-2-right-feature-count-item-canvas overflow-hidden rounded-full bg-neutral-950/50'></canvas>
      <h3 className="text-md font-bold text-center mt-3 min-w-fit">{title}</h3>
    </div>
  )
}

export default Item
