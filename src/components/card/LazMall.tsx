import Image from 'next/image'
import React from 'react'


const products = [
  {
    id: 1,
    name: 'CB Cotton',
    sub_title: 'Make Sleep Comfort',
    href: '#',
    imageSrc: '/images/lazmall-1.jpg',
    imageAlt: 'cb-cotton'
  },
  {
    id: 2,
    name: 'CB Cotton',
    sub_title: 'Make Sleep Comfort',
    href: '#',
    imageSrc: '/images/lazmall-1.jpg',
    imageAlt: 'cb-cotton'
  },
  {
    id: 3,
    name: 'CB Cotton',
    sub_title: 'Make Sleep Comfort',
    href: '#',
    imageSrc: '/images/lazmall-1.jpg',
    imageAlt: 'cb-cotton'
  },
  {
    id: 4,
    name: 'CB Cotton',
    sub_title: 'Make Sleep Comfort',
    href: '#',
    imageSrc: '/images/lazmall-1.jpg',
    imageAlt: 'cb-cotton'
  },
  {
    id: 5,
    name: 'CB Cotton',
    sub_title: 'Make Sleep Comfort',
    href: '#',
    imageSrc: '/images/lazmall-1.jpg',
    imageAlt: 'cb-cotton'
  },
  {
    id: 6,
    name: 'CB Cotton',
    sub_title: 'Make Sleep Comfort',
    href: '#',
    imageSrc: '/images/lazmall-1.jpg',
    imageAlt: 'cb-cotton'
  },
]


const LazMall = () => {
  return (
    <>
      {
        products?.map((product) => (
          <div key={product.id} className="group relative mb-4 rounded-sm hover:shadow-xl bg-white cursor-pointer">
            <div className=" relative aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-auto">
              <div className="absolute button-0 right-0 bg-gradient-to-t from-zinc-200 w-full h-full z-0" />
              <Image
                src={product?.imageSrc}
                alt={product?.imageAlt}
                width={188}
                height={188}
                className="object-cover object-center w-full lg:h-full lg:w-full z-10"
              />
            </div>
            <div className=" relative space-y-4 flex justify-center items-center">
              <div className='pb-4'>
                <div className='flex items-center justify-center'>
                  <div className='w-14 shadow-xl border -mt-6'>
                    <Image src="/images/cb-1.jpg" width={300} height={300} alt="" className=' w-14 h-12' />
                  </div>
                </div>
                <h3 className="text-sm mt-1 text-gray-700 flex items-center justify-center">
                  <a href={product?.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product?.name}
                  </a>
                </h3>
                <p className="text-xs font-light text-gray-400 ...">{product?.sub_title}</p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default LazMall