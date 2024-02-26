import React from 'react'
import Background from './dashboard/background.component'
import Dashboard from './dashboard/dashboard.component'
import Body from './body.component'

const LeftFeature = () => {
  return (
    <div className='publish-row-1-left-feature border-[1px] border-slate-300/30 bg-neutral-950/50 w-[100vw] md:h-[580px] xl:h-[600px] rounded-lg xl:ml-12 xl:w-3/5 md:p-5 lg:p-12 xl:scale-125'>
      <Background>
        <Dashboard />
      </Background>
      <Body />
    </div>
  )
}

export default LeftFeature
