import React from 'react'
import Image from 'next/image';

interface CardProps {
    img:string;
    paragraph:string;
}

const Card:React.FC<CardProps> = ({img,paragraph}) => {
  return (
    <div className='ranks-card m-1 p-[2px] h-[250px] bg-[linear-gradient(-45deg,gray,rgba(0,0,0,0.5))] rounded-lg cursor-pointer md:w-[45%] lg:w-[19%]'>
      <div className="ranks-card-inner p-5 h-[246px] bg-neutral-900 rounded-lg">
        <Image className='block mx-auto ranks-card-image' src={img} alt="card-icon" width={100} height={100} />
        <p className="ranks-card-paragraph mt-12 text-center font-bold text-md text-gray-500">{paragraph}</p>
      </div>
    </div>
  )
}

export default Card
