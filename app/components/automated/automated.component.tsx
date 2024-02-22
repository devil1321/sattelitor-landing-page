import React from 'react'
import Item from './item.component'
import { GlobalComponents } from '../global'

const Automated = () => {
  return (
    <div className='automated px-2 md:px-12 mt-12 md:flex md:flex-wrap'>
      <GlobalComponents.Title title='The only fullly automated SEO blog solution made for busy business owners' />
      <Item title='Automate content, at scale' paragraph='Say goodbye to daily manual writing and publishing. Automate the entire process, ensuring that your content reaches search engines.' img='' grid='lg:h-1/2 lg:w-3/5 lg:max-w-3/5'/>
      <Item title='Save time & effort' paragraph='A fully operational blog without any management on your part, to free up time for your core business.' img='' grid='lg:w-2/5 lg:max-w-2/5'/>
      <Item title="Improve rankings to win clients" paragraph='Auto-ranking increases the visibility of your blog, attracting potential customers to your main website.'  img='/assets/card-logo-3.png' grid='lg:w-2/5 lg:max-w-2/5'/>
      <Item  img='/assets/card-logo-4.png' grid='lg:w-1/5 lg:max-w-1/5'/>
      <Item title='Consistency & quality' paragraph='Regular content boosts SEO, maintains audience engagement, and solidifies your position in the market.' img='' grid='lg:w-2/5 lg:max-w-2/5'/>
    </div>
  )
}

export default Automated
