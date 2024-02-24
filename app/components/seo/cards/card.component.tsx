import React from 'react'
import Image from 'next/image'

interface CardProps{
  step:number;
  title:string;
  paragraph:string;
}

const Card:React.FC<CardProps> = ({step,title,paragraph}) => {
  return (
    <div className='seo-card cursor-pointer h-[200px] lg:w-1/3 mx-2 mb-5 px-5 py-10 bg-neutral-950/40 rounded-lg'>
      <div className="seo-card-header mb-5 relative top-0 left-0 flex justify-start items-center">
        <Image className='seo-card-line absolute right-0 top-0' src="/assets/line.png" alt="line" width={300} height={20} />
        <Image className='seo-card-line-hover transition-all absolute right-0 top-0 opacity-0' src="/assets/line-hover.png" alt="line" width={300} height={20} />
      </div>
      <div className="seo-card-body">
        <h3 className="font-bold text-sm my-5">{title}</h3>
        <p className="text-sm">{paragraph}</p>
      </div>
    </div>
  )
}

export default Card
