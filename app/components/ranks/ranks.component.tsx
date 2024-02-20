import React from 'react'
import { GlobalComponents } from '../global'
import Cards from './cards/cards.component'

const Ranks = () => {
  return (
    <div className='ranks'>
      <GlobalComponents.Title title='Everything you need for high-quality SEO content' />
      <Cards />
    </div>
  )
}

export default Ranks
