import Image from 'next/image'
import React from 'react'

const products = [
  {
    id: 1,
    name: 'โทรศัพท์มือถือ',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'อุปกรณ์วงจรไฟฟ้าและอะไหล่',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: '/images/category-2.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 7,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 8,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  }, {
    id: 9,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 10,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 11,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 12,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 13,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 14,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 15,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 16,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
]


const Category = () => {
  return (
    <>
      {
        products.map((product) => (
          <div key={product.id} className="group relative border-r border-b h-auto  bg-white p-4  rounded-sm sm:p-6 hover:shadow-2xl z-0 hover:z-10 ">
            <div className="aspect-w-1 aspect-h-1  rounded-lg bg-gray-200 ">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={200}
                height={200}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="pt-2 text-center">
              <h3 className="text-xs font-medium text-gray-500">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
            </div>
          </div>
        ))
      }
    </>
  )
}


export default Category