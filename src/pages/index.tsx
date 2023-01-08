import Image from 'next/image';
import * as React from 'react';

import BottomBanner from '@/components/card/BottomBanner';
import Category from '@/components/card/Category';
import FlashSale from '@/components/card/FlashSale';
import LazMall from '@/components/card/LazMall';
import Product from '@/components/card/Product';
import Layout from '@/components/layout/Layout';
import Channels from '@/components/menu/Channels';
import Seo from '@/components/Seo';
import Sidebar from '@/components/sidebar/Sidebar';
import SlideBanner from '@/components/slider/SlideBanner';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section className='block w-full m-0 p-0 bg-gray-200 sm:bg-gray-800' >
        <div className='flex flex-row h-auto container mx-auto relative overflow-hidden'>
          <div className='hidden sm:block basis-1/4'>
            <Sidebar />
          </div>
          <div className="block w-full sm:basis-1/2 bg-slate-200 m-2 pr-4 rounded-xl">
            <SlideBanner />
          </div>
        </div>
      </section>
      <section className='flex flex-col h-auto p-2 bg-gray-200'>
        <div className='container mx-auto mt-4 flex items-center justify-center  h-20 sm:h-10 sm:space-x-4'>
          <Channels />
        </div>
        <div className='container mx-auto mt-4 flex flex-col h-auto '>
          <h2 className='hidden sm:inline-flex text-xl font-medium text-gray-500'>Flash Sale</h2>
          <FlashSale />
        </div>
      </section>
      <section className='flex flex-col h-auto p-2 bg-gray-200'>
        <div className='container mx-auto mt-4 flex flex-col h-auto'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-medium text-gray-500'>LazMall</h2>
            <a
              className='flex items-center text-teal-500 hover:text-teal-700 hover:underline'
              href="#"
            >
              <span className='text-sm font-medium'>
                เลือกซื้อสินค้าต่อ
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
          <div className='mt-2 grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6'>
            <LazMall />
          </div>
        </div>
      </section >
      <section className='hidden sm:flex flex-col h-auto p-2 bg-gray-200'>
        <div className='container mx-auto mt-4 flex flex-col h-auto'>
          <h2 className='text-xl font-medium text-gray-500'>หมวดหมู่</h2>
          <div className="grid grid-cols-2 border-l pt-2 border-gray-200 sm:mx-0 md:grid-cols-8 lg:grid-cols-8">
            <Category />
          </div>
        </div>
      </section >
      <section className=' sm:hidden flex flex-col h-auto px-2 bg-gray-200'>
        <div className='container mx-auto mt-4 flex flex-row h-auto overflow-hidden space-x-4 py-2'>
          {[...Array(7)].map((_, i) => (
            <button key={i} className='flex flex-col items-center justify-center w-14 p-2 ml-2 text-sm font-medium text-gray-500 bg-white rounded-lg shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              <Image src='/images/logo-l.png' alt='placeholder' width={50} height={50} />
              <span className=' text-gray-400'>ทั้งหมด</span>
            </button>
          )
          )}
        </div>
      </section>
      <section className='flex flex-col h-auto p-2 bg-gray-200'>
        <div className='container mx-auto mt-4 flex flex-col h-auto'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-medium text-gray-500'>สินค้าเพื่อคุณโดยเฉพาะ</h2>
          </div>
          <div className='mt-2 grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6'>
            <Product />
          </div>
          <div className='w-full flex items-center justify-center'>
            <button
              type="button"
              className="inline-flex items-center rounded-sm border border-teal-500  px-24 py-2 text-sm font-medium text-teal-500 shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              โหลดเพิ่มเติม
            </button>
          </div>
        </div>
      </section >
      <div className='bg-slate-200'>
        <BottomBanner />
      </div>
    </Layout >
  );
}
