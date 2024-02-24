import React from 'react'
import Item from './count-item.component'

const Count = () => {
  return (
    <div className='publish-row-2-right-feature-count mb-12 flex justify-center items-center flex-wrap'>
      <Item title="Performance" to={70} />
      <Item title="Accessibility" to={89} />
      <Item title="Practices" to={99} />
      <Item title="SEO" to={78} />
    </div>
  )
}

export default Count
