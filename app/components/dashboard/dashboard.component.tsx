import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Image className='block mx-auto' src="/assets/dashboard.png" alt="dashboard" width={1000} height={700} />
    </div>
  )
}

export default Dashboard
