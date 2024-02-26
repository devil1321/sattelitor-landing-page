'use client'
import React, { useState } from 'react'


const Item:React.FC<{title:string;content:string}> = ({title,content}) => {

  const [isOpen,setIsOpen] = useState<boolean>(false)

  return (
    <div className='questions-accordion-item md:md:w-[720px] lg:w-[100%] my-2 py-3 rounded-lg border-[1px] border-slate-300 cursor-pointer transition-all hover:bg-neutral-950 bg-neutral-950/50'>
      <h3 onClick={()=>setIsOpen(!isOpen)} className='text-md font-bold px-5'>{title}</h3>
      {isOpen && <p className="questions-accordion-item-content text-sm px-5">{content}</p>}
    </div>
  )
}

export default Item
