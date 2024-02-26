import React from 'react'
import Feature from './feature'
import Body from './body.component'

const RightFeature = () => {
  return (
    <div className='publish-row-1-right-feature border-[1px] border-slate-300/30 md:mt-12 xl:-mt-[75px] xl:translate-x-24  rouded-lg overflow-hidden bg-neutral-950/50 h-max xl:h-[750px] rounded-lg w-[100vw] lg:my-0 xl:w-2/5'>
      <Feature />
      <Body />
    </div>
  )
}

export default RightFeature
