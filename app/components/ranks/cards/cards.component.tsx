import React from 'react'
import Card from './card.component'

const Cards = () => {
  return (
    <div className='ranks-cards md:flex md:justify-center md:items-center md:flex-wrap'>
      <Card img='/assets/cards-logo-1.png' paragraph='Your business details and voice' />
      <Card img='/assets/cards-logo-2.png' paragraph='Aim audience that convert' />
      <Card img='/assets/cards-logo-3.png' paragraph='Target relevant keywords' />
      <Card img='/assets/cards-logo-4.png' paragraph='Spy and compete your competitors.' />
      <Card img='/assets/cards-logo-5.png' paragraph='Undetectable AI, human-like writing' />
      <Card img='/assets/cards-logo-6.png' paragraph='2,000 words per blog post in average' />
      <Card img='/assets/cards-logo-7.png' paragraph='Unlimited blog post ideas' />
      <Card img='/assets/cards-logo-8.png' paragraph='Internal and external link building' />
      <Card img='/assets/cards-logo-9.png' paragraph='Fully automated SEO platform' />
      <Card img='/assets/cards-logo-10.png' paragraph='Cover image from Unsplash' />
    </div>
  )
}

export default Cards
