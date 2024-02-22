import React from 'react'
import Image from 'next/image';

interface ItemProps {
    title?:string;
    paragraph?:string;
    img?:string;
    grid:string;
}

const Item:React.FC<ItemProps> = ({title,paragraph,grid,img}) => {
  return (
    <div className={`automated-item md:min-w-[640px] ${grid} p-[2px] rounded-lg bg-[linear-gradient(45deg,black,gray)]`}>
        <div className="automated-item-inner flex justify-center items-center flex-col h-[400px] py-2 bg-neutral-950/90 rounded-lg">
            {title && <h3 className="md:w-2/3 my-2 text-3xl text-center font-bold">{title}</h3>}
            {paragraph && <p className="md:w-2/3 my-2 text-sm text-center font-bold">{paragraph}</p>}
            {img && <Image className='block mx-auto m-5' src={img} alt='item-image' width={200} height={200} />}
        </div>
    </div>
  )
}

export default Item
