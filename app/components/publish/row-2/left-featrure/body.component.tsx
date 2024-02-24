import React from 'react'

import Image from 'next/image'

const Body = () => {
  return (
    <div className='publish-row-2-body 1/4'>
      <Image src="/assets/publish-items/row-2/message-checkmark-icon.png" alt='icon' width={20} height={20} />
      <h3 className="text-md font-bold my-2">Receive your blog posts by email</h3>
      <p className="text-sm">Get blog content delivered to your inbox, ready to publish, share, proofread or even resell.</p>
    </div>
  )
}

export default Body
