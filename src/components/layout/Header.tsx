import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';


export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white '>
      <div className='layout flex h-14 sm:h-20 items-center justify-between'>
        <UnstyledLink href='/' className='hidden sm:block font-bold hover:text-gray-600'>
          <Image src='/images/logo.png' alt='Logo' width={127} height={40} className='block' />
        </UnstyledLink>
        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="w-full max-w-lg lg:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search"
                className="block w-full rounded-3xl sm:rounded-sm border border-transparent bg-gray-100 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
              <div className='sm:hidden pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1'>
                <button type='button' className=' px-4 py-1 text-white rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 ...'>
                  ค้นหา
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="hidden sm:inline-flex items-center rounded border border-transparent  px-2.5 py-1.5 text-xs font-medium text-blue-900 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </button>
        <div className='px-4 hidden sm:inline-block'>
          <Image src='/images/free-nav-rigth.jpg' alt='Logo' width={188} height={45} className='block' />
        </div>
      </div>
    </header>
  );
}
