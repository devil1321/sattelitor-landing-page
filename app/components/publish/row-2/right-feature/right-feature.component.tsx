import React from 'react'
import Body from './body.component'
import Count from './count/count.component'

const RightFeature = () => {
  return (
    <div className='publish-row-2-right-feature border-[1px] border-slate-300/30 min-w-[100vw] xl:min-w-[550px] xl:w-3/5 xl:h-[345px] rounded-lg bg-neutral-950/50 my-3 xl:my-0 xl:ml-3'>
      <Body />
      <Count />
    </div>
  )
}

export default RightFeature
