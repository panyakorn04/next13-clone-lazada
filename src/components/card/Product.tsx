import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const products = [
  {
    id: 1,
    name: '"สินค้าพร้อมจัดส่ง！น้ำหอมแฟชั่น3 กลิ่น (50ML) ถูกสุดในเว็ป COOC COCOSILIYA MADEMOISELLE 50ML"',
    href: '#',
    imageSrc: '/images/product-1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '฿35',
    discount: '฿12,500',
    discountPercentage: '-25%',
    rating: 5,
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
    rating: 5,
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
    rating: 4,
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
    rating: 4,
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
    rating: 5,
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
    rating: 5,
  },
  // More products...
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const Product = () => {
  return (
    <>
      {[...Array(24)].fill("").map((_, i) => (
        <div key={i} className="group relative mb-4 hover:shadow-xl bg-white">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-auto">
            <Image
              src="/images/product-1.jpg"
              alt="สินค้าพร้อมจัดส่ง！น้ำหอมแฟชั่น3 กลิ่น (50ML) ถูกสุดในเว็ป COOC COCOSILIYA MADEMOISELLE 50ML"
              width={188}
              height={188}
              className="object-cover w-full object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex flex-col p-2">
            <div>
              <h3 className=" text-sm font-normal line-clamp-2 text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  สินค้าพร้อมจัดส่ง！น้ำหอมแฟชั่น3 กลิ่น (50ML) ถูกสุดในเว็ป COOC COCOSILIYA MADEMOISELLE 50ML
                </a>
              </h3>
              <p className="mt-1 text-base font-medium text-orange-500">฿35</p>
            </div>
            <div className=" flex items-center space-x-2 pb-4">
              <p className="text-xs font-light text-gray-400 line-through ...">฿12,500</p>
              <p className="text-xs font-light text-gray-800 ...">-25%</p>
            </div>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    5 > rating ? 'text-yellow-400' : 'text-gray-200',
                    'flex-shrink-0 h-4 w-4'
                  )}
                  aria-hidden="true"
                />
              ))}
              <span className='text-xs  text-gray-400'>(930)</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Product