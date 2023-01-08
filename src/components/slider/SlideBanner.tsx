import Image from 'next/image'
import React from 'react'
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: 'LazMail',
    href: '#',
    current: false,
    imageSrc: '/images/banner1.jpg',
  },
  {
    id: 2,
    name: 'LazMail1',
    href: '#',
    current: false,
    imageSrc: '/images/banner2.jpg',
  },
]

const SlideBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative rounded-lg sm:rounded-sm"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center rounded-lg sm:rounded-sm"
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default SlideBanner