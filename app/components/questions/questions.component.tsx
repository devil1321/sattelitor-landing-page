import React from 'react'
import { GlobalComponents } from '../global'
import Accordion from './accordion/accordion.component'

const Questions = () => {
  return (
    <div className='lg:flex'>
      <GlobalComponents.Title title='Frequently Ask Questions' />
      <Accordion />
    </div>
  )
}

export default Questions
