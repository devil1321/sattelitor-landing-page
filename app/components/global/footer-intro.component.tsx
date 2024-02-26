import React from 'react'
import Image from 'next/image'
import { GlobalComponents } from '.'

const FooterIntro = () => {
  return (
    <div className='footer-intro my-12 relative top-0 left-0'>
      <GlobalComponents.Title title='Finally, your business will have the blog it deserves' />
      <p className='text-sm text-center -mt-8'>The sooner you start, the better the results!</p>
      <button className="footer-intro-btn relative top-0 left-0 rounded-lg py-2 px-5 bg-slate-200 font-bold mt-4 text-black block mx-auto">Create a blog</button>
      <Image className='absolute md:top-48 xl:top-24 left-1/2 -translate-x-1/2' src="/assets/particles-wave.png" alt="wave" width={1200} height={300} />
    </div>
  )
}

export default FooterIntro
