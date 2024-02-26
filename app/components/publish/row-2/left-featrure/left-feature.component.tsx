import React from 'react'
import Body from './body.component'
import FeatureImage from './feature-image.component'

const LeftFeature = () => {
  return (
    <div className='publish-row-2-left-feature flex justify-start xl:justify-between items-start border-[1px] border-slate-300/30 xl:items-center flex-col xl:flex-row p-12 -ml-9 md:ml-0 xl:-ml-9 bg-neutral-950/50 rounded-lg xl:w-3/5'>
      <Body />
      <FeatureImage />
    </div>
  )
}

export default LeftFeature
