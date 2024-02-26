import React from 'react'

const Item:React.FC<{className:string;content:string;name:string}> = ({className,content,name}) => {
  return (
    <div className={`marketers-item p-5 m-2 bg-neutral-950 rounded-lg px-5 py-4 ${className}`}>
      <p className='text-sm'>{content}</p>
      <h3 className='marketers-stars mt-5 mb-3 text-sm font-bold'>★★★★★</h3>
      <p className='font-bold'>{name}</p>
    </div>
  )
}

export default Item
