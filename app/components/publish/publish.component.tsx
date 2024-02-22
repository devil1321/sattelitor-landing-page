import React from 'react'
import { Row_1_Components } from './row-1'
const Publish = () => {
  return (
    <div className='publish my-[100px] md:my-[200px]'>
      <div className="publish-feature-1 flex justify-center items-center flex-col xl:flex-row">
        <Row_1_Components.LeftFeatureComponents.LeftFeature />
        <Row_1_Components.RightFeatureComponents.RightFeature />
      </div>
    </div>
  )
}

export default Publish
