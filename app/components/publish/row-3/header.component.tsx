import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='publish-row-3-header p-4 mb-5 md:w-2/3'>
      <Image src="/assets/publish-items/row-3/planet-icon.png" alt="planet" width={20} height={20} />
      <h3 className="text-md font-bold my-3">Reach new markets with multilingual SEO</h3>
      <p className="text-sm">Automatically created blog content in your language and languages you want to aim. Say ‘Bonjour’ to your new visitors!</p>
    </div>
  )
}

export default Header
