import Image from 'next/image'
import React from 'react'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/images/product1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/images/product1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/images/product1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/images/product1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/images/product1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/images/product1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
  },
  // More products...
]

const FlashSale = () => {
  return (
    <>
      <div className='hidden sm:flex items-center bg-white p-4 rounded-sm mb-1  ...'>
        <p className=' text-orange-500 text-sm font-base'>ขณะนี้ลดราคาอยู่</p>
        <div className='flex items-center justify-center ml-8 space-x-2 '>
          <p className='text-sm font-base'>จะสิ้นสุด</p>
          <span
            className="inline-flex items-center rounded border border-transparent bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            01
          </span><p>:</p><span
            className="inline-flex items-center rounded border border-transparent bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            01
          </span><p>:</p>
          <span
            className="inline-flex items-center rounded border border-transparent bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            01
          </span>
        </div>
        <div className='right-0 ml-auto'>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-orange-500 bg-white px-3 py-2 text-sm font-medium leading-4 text-orange-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >ช้อปสินค้าทั้งหมด</button>
        </div>
      </div>
      <div className=' bg-white flex justify-between items-center p-2'>
        <h1 className=' font-semibold text-lg'>LazFlash Sale</h1>
        <a href='#' className=' text-gray-600'>ช้อปต่อ</a>
      </div>
      <div className=' bg-white grid grid-cols-3   gap-y-10 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6'>
        {products.map((product) => (
          <div key={product.id} className="group relative p-2 mb-4 rounded-sm md:hover:shadow-xl">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-auto">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={188}
                height={188}
                className="object-contain object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-base font-semibold text-orange-500">{product.price}</p>
              </div>
              <div className=" flex items-center space-x-2 pb-4">
                <p className="text-xs font-light text-gray-400 line-through ...">{product.discount}</p>
                <p className="text-xs font-light text-gray-800 ...">{product.discountPercentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )

}

export default FlashSale