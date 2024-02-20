import React from 'react'
import Image from 'next/image'
import { GlobalComponents } from '../../global'
import Cards from './cards.component'

const Seo = () => {
  return (
    <div className='seo translate-y-20 relative top-0 left-0'>
      <Image className='absolute w-100 -z-10 -top-20 left-1/2 -translate-x-1/2' src="/assets/particles-wave.png" alt="particles" width={1200} height={200} />
      <GlobalComponents.Title title="The fastest and easiest way to get a SEO blog for your business without having to manage it" />
      <Cards />
      <Image className='block mx-auto' src="/assets/dashboard-2.png" alt="dashboard" width={1200} height={500} />
    </div>
  )
}

export default Seo
