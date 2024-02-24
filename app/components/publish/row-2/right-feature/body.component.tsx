import React from 'react'
import Image from 'next/image'
const Body = () => {
  return (
    <div className='publish-row-2-right-feature-body p-5'>
      <div className="publish-row-2-right-feature-body-images flex">
        <Image className='mr-2' src="/assets/publish-items/row-2/computer-icon.png" alt="computer-icon" width={20} height={20} />
        <Image className='mr-2' src="/assets/publish-items/row-2/phone-icon.png" alt="phone-icon" width={20} height={20} />
        <Image className='mr-2' src="/assets/publish-items/row-2/phone-icon.png" alt="phone-icon" width={20} height={20} />
      </div>
      <h3 className="my-2 font-bold text-md">Your blog will be... Fast!</h3>
      <p className="text-sm">Results after Google Page Insights analysis.</p>
    </div>
  )
}

export default Body
