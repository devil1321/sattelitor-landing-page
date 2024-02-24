import React from 'react'
import Image from 'next/image'

const Body = () => {
  return (
    <div className='publish-row-1-right-feature-body py-4 mt-12 px-2 md:px-12 md:w-2/3 xl:w-100'>
      <Image src="/assets/publish-items/feature/connect-logo.png" alt="connect-logo" width={20} height={20} />
      <h3 className="text-md font-bold my-5">Connect to your favorite tools</h3>
      <p className="text-sm">Integrate Satellitor seamlessly into your workflow. Connect to your favorite CMS, including Wordpress, Webflow, Shopify, Ghost, and many more...</p>
    </div>
  )
}

export default Body
