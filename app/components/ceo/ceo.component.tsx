import React from 'react'
import Image from 'next/image'

const Ceo = () => {
  return (
    <div className='ceo md:w-1/3 mx-auto my-12'>
      <h3 className="text-lg font-bold my-2">Working with Satellitor was a game-changer.</h3>
      <p className="text-sm text-gray-500">They delivered top-ranking content that amplified our online visibility and brand recognition, while saving us time and money. Their exceptional service, reliability, and professionalism make them a highly recommended solution.</p>
      <div className="my-5 ceo-profile flex justify-start items-center">
        <Image className='mr-1' src="/assets/founder-image.png" alt="founder" width={40} height={40}/>
        <div>
            <h3 className="text-sm font-bold">Yifan Goh</h3>
            <p className="text-sm">Founder at Our Baby AI</p>
        </div>
      </div>
    </div>
  )
}

export default Ceo
