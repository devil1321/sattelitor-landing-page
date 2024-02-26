import React from 'react'
import Item from './item.component'

const Items = () => {
  return ( 
    <div className='publish-row-3-items flex px-4 flex-wrap md:w-2/3'>
      <Item icon="/assets/publish-items/row-3/chinesse-icon.png" title='Availabe in 150+ languages' />
      <Item icon="/assets/publish-items/row-3/arrow-icon.png" title='Multilangue SEO in one-click' />
      <Item icon="/assets/publish-items/row-3/robot-icon.png" title='Machine-powered translation' />
      <Item icon="/assets/publish-items/row-3/human-icon.png" title='Proofread by native humans' />
    </div>
  )
}

export default Items
