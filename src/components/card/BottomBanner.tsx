import Image from 'next/image'
import React from 'react'


const BottomBanner = () => {
  return (
    <div className='container mx-auto flex items-center justify-center p-4 space-x-2'>
      {[...Array(3)].map((_, i) => (
        <div key={i} className='relative  cursor-pointer hover:opacity-75'>
          <Image src="/images/bottom-banner-1.jpeg" alt="bottom-banner" width={500} height={400} />
        </div>
      ))}
    </div>
  )
}

export default BottomBanner