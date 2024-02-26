import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer py-12 mt-[200px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center'>
      <p className="text-sm text-gray-500">© 2023 Satellitor. All rights reserved.</p>
      <div className="footer-links my-2 md:my-0 flex justify-between items-center">
        <Link className='mx-2 text-gray-500' href="#">Login — Signup</Link>
        <div className='w-[2px] h-[20px] bg-neutral-500 rounded-lg'></div>
        <Link className='mx-2 text-gray-500' href="#">Privacy — Terms</Link>
      </div>
    </div>
  )
}

export default Footer
