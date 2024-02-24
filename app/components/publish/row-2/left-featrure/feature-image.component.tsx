'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const FeatureImage = () => {

  const handleMessages = () =>{
    let arr = Array.from(Array(80).keys())
    return arr.map((n:number) => <Image key={n} className='m-[2px]' src="/assets/publish-items/row-2/message-icon.png" alt='message-icon' width={20} height={20} />)
  }



  return (
    <div className='publish-row-2-feature-image w-2/4 h-[200px] xl:h-100 relative left-1/2 -translate-x-[110%] md:left-1/2 md:-translate-x-[80%]  xl:left-0 xl:-translate-x-0 top-10 xl:top-0 mt-12'>
      <div className="publish-row-2-feature-image-slider-top-wrapper bg-neutral-950 border-y-2 border-neutral-500 w-[300px] overflow-hidden absolute left-1/2 -top-[60px] z-10 -translate-x-1/2">
        <div className="publish-row-2-feature-image-slider flex py-1">
          <h3 className="text-md font-bold mx-6">daily</h3>
          <h3 className="text-md font-bold mx-6">weekly</h3>
          <h3 className="text-md font-bold mx-6">monthly</h3>
          <h3 className="text-md font-bold mx-6">daily</h3>
          <h3 className="text-md font-bold mx-6">weekly</h3>
          <h3 className="text-md font-bold mx-6">monthly</h3>
        </div>
      </div>
      <div className="pubslish-row-2-feature-image-divider absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[4px] rounded-lg h-[150px] bg-neutral-900"></div>
      <div className="publish-row-2-feature-image-message-image-wrapper absolute  z-10 left-1/2 -top-[10px] -translate-x-1/2 rounded-lg overflow-hidden w-fit bg-neutral-900">
        <Image src="/assets/publish-items/row-2/message-lg-icon.png" alt="message-lg-icon" width={250} height={200} />
      </div>
      <div className="publish-row-2-feature-image-messages-wrapper overflow-hidden ">
        <div className="publish-row-2-feature-image-messages flex justify-start w-max">
          <div className='publish-row-2-feture-image-messages-inner w-[480px] flex flex-wrap'>
            {handleMessages()}
          </div>
          <div className='publish-row-2-feture-image-messages-inner w-[480px] flex flex-wrap'>
            {handleMessages()}
          </div>
        </div>
      </div>
      <div className="bg-neutral-950 p-2 w-[180px] border-[1px] border-slate-800 text-sm text-center rounded-lg absolute -bottom-[0px] left-1/2 -translate-x-1/2">New Email Recived</div>
    </div>
  )
}

export default FeatureImage
