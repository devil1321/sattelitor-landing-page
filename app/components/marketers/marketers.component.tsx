import React from 'react'
import Background from './background.component'
import Item from './item.component'
import Count from './count.component'
import { GlobalComponents } from '../global'

const Marketers = () => {
  return (
    
    <Background>
      <div className="marketers mb-12 relative top-0 left-0">
        <GlobalComponents.Title title='Blogs loved by marketers and Google' />
        <p className="text-sm text-center -mt-10">Google is complete okay with AI generated blog posts. They even say so in their official documentation.</p>
        <div className="marketers-row-1 lg:absolute lg:top-24 lg:left-0 lg:flex lg:justify-start lg:items-start">
          <Item className='lg:w-1/4 lg:min-h-[490px]' content={`“Really worth the  investment for blogs. I've been "playing" with Satellitor for a couple  weeks now and it's a blast.  We are in an ultra-niche  market and having an AI  providing relevant content  for our blog posts (long  form) is either super  pricey or not so relevant  for public view. When I  first tried Satellitor I  have been impressed with  the relevance of the  content produced and the  easiness of the UI that  doesn't require any  learning curve. We have 4  different AI assistants for  copywriting but Satellitor  has become our goto tool  for anything blogging. I  definitely recommend  Satellitor.”`} name='Christophe' />
          <Count className='lg:w-2/4 lg:min-h-[210px]' title='Words that rank on Google thanks to Satellitor' count={10.680000} />
          <Item className='lg:w-1/4' content='“You must have it. After trying it, I realized that I made the right decision. Its design and user interface make it easy and efficient for me to achieve my goals.”' name='Arif' />
        </div>
        <div className="marketers-row-1 lg:absolute lg:top-[320px] lg:left-1/4  lg:flex lg:justify-start lg:items-start">
          <Item className='lg:w-1/3' content={`"Great content AI. I really like what Satellitor generates. I've tried a few of AIs and some of them generate lots of content, but often out of topic, but often out of topic, or with phrases which have  really no meaning. Especially for technical content."`} name='Armonie' />
          <Item className='lg:w-1/3' content={`"Generating blog content is suddenly a hell of a lot simpler."`} name='AJ' />
          <Item className='lg:w-1/3' content={`"Excellent, quick and user friendly. Thanks!!!"`} name='Pierre' />
        </div>
      </div>
    </Background>
  )
}

export default Marketers
