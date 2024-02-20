import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='nav py-5 flex justify-between items-center'>
      <Image className='nav-logo' src="/assets/logo.png" alt='logo' width={100} height={40} />
      <button className="nav-btn text-black font-bold relative top-0 left-0 px-6 py-2 bg-slate-200 rounded-lg">Create a blog</button>
    </div>
  )
}

export default Nav
