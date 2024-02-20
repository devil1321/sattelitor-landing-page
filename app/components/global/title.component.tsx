import React from 'react'

const Title:React.FC<{title:string}> = ({title}) => {
  return (
    <h2 className='title my-12 font-bold text-center text-4xl mx-auto md:w-5/6'>
      {title}
    </h2>
  )
}

export default Title
