import React from 'react'
import Background from './dashboard/background.component'
import Dashboard from './dashboard/dashboard.component'
import Body from './body.component'

const LeftFeature = () => {
  return (
    <div className='publish-row-1-left-feature bg-neutral-950/50 w-[100vw] h-[350px] xl:h-[350px] rounded-lg xl:ml-12 xl:w-3/5 md:p-5 lg:p-12 xl:scale-125'>
      <Background>
        <Dashboard />
      </Background>
      <Body />
    </div>
  )
}

export default LeftFeature
