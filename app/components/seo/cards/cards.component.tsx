import React from 'react'
import Card from './card.component'

const Cards = () => {
  return (
    <div className='px-0 md:px-8 md:flex md:justify-between md:items-start flex-wrap lg:flex-nowrap'>
      <Card step={1} title="Provide some details" paragraph='Answer three simple questions about your busines to help our AI undestand your needs and your target.' />
      <Card step={2} title="Let the blog write itself" paragraph='Articles are auto-written based on your business keywords and consistently published to please Google.' />
      <Card step={3} title="Publish your blog in one-click" paragraph='Publish your blog, with no technical skills required. On a new domain name or on your existing solution.' />
    </div>
  )
}

export default Cards
