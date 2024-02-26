import React from 'react'
import Image  from 'next/image'

const Item:React.FC<{icon:string,title:string}> = ({icon,title}) => {
  return (
    <div className='publish-row-3-item flex items-center md:w-2/5 my-2 md:m-2'>
      <Image className='mr-2' src={icon} alt="icon" width={20} height={20} />
      <h3 className="text-sm font-bold">{title}</h3>
    </div>
  )
}

export default Item
