import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero my-12'>
      <h1 className='text-5xl text-center font-bold mx-auto lg:w-2/5'>Create an SEO blog that manages itself</h1>
      <p className='lg:w-2/6 text-center my-5 mx-auto'>Automatically write, publish and rank blog posts on an auto-built SEO blog, that brings traffic to your website and grows your online presence.</p>
      <button className="hero-btn relative top-0 left-0 block my-4 px-6 py-2 font-bold text-black rounded-lg mx-auto bg-slate-200">Create a blog</button>
      <div className='flex items-center justify-center'>
        <Image className='mr-2' src="/assets/lock-icon.png" alt="lock" width={20} height={5} />
        <span>Currently in close beta</span>
      </div>
    </div>
  )
}

export default Hero
