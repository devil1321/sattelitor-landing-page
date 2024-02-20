import React from 'react'
import Image from 'next/image';

interface FeatureBackgroundProps{
    children:React.ReactNode;
    bg_1?:string;
    bg_2?:string;
}

const FeatureBackground:React.FC<FeatureBackgroundProps> = ({children,bg_1,bg_2}) => {
  return (
    <div className='feature-bg mt-[200px] relative top-0 left-0'>
      {bg_1 && <Image className='absolute -z-10 -top-40 left-1/2 -translate-x-1/2' src={bg_1} alt="background" width={1200} height={500} />}
      {bg_2 && <Image className='absolute top-50 left-0' src={bg_2} alt="background" width={1200} height={500} />}
      {children}
    </div>
  )
}

export default FeatureBackground
