import React from 'react'
import FeatureWrapper from './feature-wrapper.component'
import Header from './header.component'
import Items from './items/items.component'
import Slider from './slider.component'

const Feature = () => {
  return (
    <FeatureWrapper>
      <div className='publish-row-3-feature  bg-neutral-950/50'>
        <Header />
        <Items />
        <Slider />
      </div>
    </FeatureWrapper>
  )
}

export default Feature
