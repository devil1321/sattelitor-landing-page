import React from 'react'

const Background:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='marketers-background relative top-0 left-0'>
      <div className="absolute top-0 left-10 -z-10 marketers-bg w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[800px] 2x:h-[800px] bg-[radial-gradient(50px,rgba(50,50,50,1),transparent)] md:bg-[radial-gradient(100px,rgba(150,50,50,1),transparent)] lg:bg-[radial-gradient(150px,rgba(50,50,50,1),transparent)] xl:bg-[radial-gradient(200px,rgba(50,50,50,1),transparent)]"></div>
      <div className="absolute top-1/2 left-24 -z-10 marketers-bg w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[800px] 2x:h-[800px] bg-[radial-gradient(50px,rgba(50,50,50,1),transparent)] md:bg-[radial-gradient(100px,rgba(150,50,50,1),transparent)] lg:bg-[radial-gradient(150px,rgba(50,50,50,1),transparent)] xl:bg-[radial-gradient(200px,rgba(50,50,50,1),transparent)]"></div>
      <div className="absolute top-1/2 right-10 -z-10 marketers-bg w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[800px] 2x:h-[800px] bg-[radial-gradient(50px,rgba(50,50,50,1),transparent)] md:bg-[radial-gradient(100px,rgba(150,50,50,1),transparent)] lg:bg-[radial-gradient(150px,rgba(50,50,50,1),transparent)] xl:bg-[radial-gradient(200px,rgba(50,50,50,1),transparent)]"></div>
      <div className="absolute bottom-0 right-24 -z-10 marketers-bg w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[800px] 2x:h-[800px] bg-[radial-gradient(50px,rgba(50,50,50,1),transparent)] md:bg-[radial-gradient(100px,rgba(150,50,50,1),transparent)] lg:bg-[radial-gradient(150px,rgba(50,50,50,1),transparent)] xl:bg-[radial-gradient(200px,rgba(50,50,50,1),transparent)]"></div>
      {children}
    </div>
  )
}

export default Background
