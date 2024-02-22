import React from 'react'
import Background from './dashboard/background.component'
import Dashboard from './dashboard/dashboard.component'

const LeftFeature = () => {
  return (
    <div className='publish-row-1-left-feature ml-12 md:w-3/5 md:p-5 lg:p-12 xl:scale-125'>
      <Background>
        <Dashboard />
      </Background>
    </div>
  )
}

export default LeftFeature
