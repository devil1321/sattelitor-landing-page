import React from 'react'
import Image from 'next/image'
import { Row_1_Components } from './row-1'
import { Row_2_Components } from './row-2'
import { GlobalComponents } from '../global'
const Publish = () => {
  return (
    <div className='publish my-[100px] md:my-[200px] relative'>
      <div className="publish-header mb-[120px] overflow-hidden">
        <div className='publish-wave flex w-max absolute left-0 top-[20px]'>
          <Image src="/assets/particles-straight-wave.png" alt="particles-wave" width={1200} height={200} />
          <Image src="/assets/particles-straight-wave.png" alt="particles-wave" width={1200} height={200} />
        </div>
        <GlobalComponents.Title title='Easily create, publish and host your blog' />
        <p className="text-sm text-center -mt-12">No technical skills needed. No Code needed. No management time needed.</p>
      </div>
      <div className="publish-feature-1 flex justify-start items-start flex-col xl:flex-row">
        <Row_1_Components.LeftFeatureComponents.LeftFeature />
        <Row_1_Components.RightFeatureComponents.RightFeature />
      </div>
      <div className="publish-feature-2 mt-2 flex justify-start items-start flex-col xl:flex-row">
        <Row_2_Components.LeftFeatureComponents.LeftFeature />
        <Row_2_Components.RightFeatureComponents.RightFeature />
      </div>
    </div>
  )
}

export default Publish
