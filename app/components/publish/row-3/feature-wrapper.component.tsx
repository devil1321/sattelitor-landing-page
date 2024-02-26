import React from 'react'

const FeatureWrapper:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='publish-row-3-feature-wrapper rouded-lg md:min-w-[1000px] xl:min-w-[1300px] xl:-translate-x-10 border-l-0 border-r-0 border-[1px] border-slate-300/30 my-2 bg-[radial-gradient(400px,rgba(70,70,70,1),transparent)]'>
      {children}
    </div>
  )
}

export default FeatureWrapper
