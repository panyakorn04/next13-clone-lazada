import Image from 'next/image'
import React from 'react'

const navigation = [
  {
    id: 1,
    name: 'LazMail',
    href: '#',
    current: false,
    imageSrc: '/images/icon-1.png',
  },
  {
    id: 2,
    name: 'คูปองลดเพิ่ม',
    href: '#',
    current: false,
    imageSrc: '/images/icon-2.png',
  },
  {
    id: 3,
    name: 'เติมเงิน&ดิลอาหาร',
    href: '#',
    current: false,
    imageSrc: '/images/icon-3.png',
  },
  {
    id: 4,
    name: 'LazBlog',
    href: '#',
    current: false,
    imageSrc: '/images/icon-4.png',
  },
  {
    id: 5,
    name: 'ร้านค้าแนะนำ',
    href: '#',
    current: false,
    imageSrc: '/images/icon-5.png',
  },
]

const Channels = () => {
  return (
    <>

      {
        navigation.map((item) => (
          <div key={item?.name} className='flex flex-col space-y-2 items-center justify-center sm:py-6'>
            <button
              type="button"
              className="inline-flex sm:flex-1 items-center px-1 sm:pl-1  sm:py-1 border h-10 lg:w-48 text-sm font-medium rounded-full shadow-sm text-gray-800 bg-white hover:shadow-xl hover:hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              aria-current={item.current ? 'page' : undefined}
            >
              <Image src={item.imageSrc} alt={item.name} width={500} height={500} className="h-8 w-8 bg-slate-200 rounded-full object-fill" />
              <span className="hidden sm:inline-flex truncate px-auto">{item.name}</span>
            </button>
            <span className="inline-flex sm:hidden truncate pl-2">{item.name}</span>
          </div>
        ))
      }

    </>
  )
}

export default Channels