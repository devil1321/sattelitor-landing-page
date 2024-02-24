import React from 'react'
import Image from 'next/image'

const Body = () => {

  const tags = [
    'Registered domain name',
    'Hosting',
    'Your brand color',
    'Free SSL',
    'Marketing copy management',
    'Analytics',
    'Automatic sitemap',
    'Lightning Fast',
    'Custom domain',
    'Relevant meta tags'
  ]

  return (
    <div className='publish-row-1-left-feature-body mt-[320px]'>
      <Image className='ml-2' src="/assets/publish-items/body-icon.png" alt="body-icon" width={20} height={20} />
      <h3 className="ml-2 mt-5 text-md font-bold">Start a perfect SEO blog from scratch</h3>
      <div className="publish-row-1-left-feature-tags-wrapper my-5  md:w-4/5 xl:w-[500px] flex flex-wrap">
        {tags.map((t:string) => <div key={t} className='publish-row-1-left-feature-tag text-sm m-1 p-2 w-fit rounded-lg bg-neutral-950/50 hover:bg-neutral-900 transition-all cursor-pointer border-[1px] border-neutral-700'>{t}</div>)}
      </div>
    </div>
  )
}

export default Body
