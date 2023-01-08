import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 1,
    name: 'ศูนย์ช่วยเหลือ',
  },
  {
    id: 2,
    name: 'การสั่งซื้อสินค้า',
  },
  {
    id: 3,
    name: 'การส่งสินค้า',
  },
  {
    id: 4,
    name: 'นโยบายของสินค้าต่างประเทศ',
  },
  {
    id: 5,
    name: 'การคืนสินค้า',
  },
  {
    id: 6,
    name: 'ติดต่อเรา',
  },

]
const data2 = [
  {
    id: 1,
    name: 'ประเภท',
  },
  {
    id: 2,
    name: 'เกี่ยวกับลาซาด้า',
  },
  {
    id: 3,
    name: 'Afﬁliate Program',
  },
  {
    id: 4,
    name: 'ข้อตกลงและเงื่อนไข',
  },
  {
    id: 5,
    name: 'นโยบายความเป็นส่วนตัว',
  },
  {
    id: 6,
    name: 'ข่าวประชาสัมพันธ์',
  },
  {
    id: 7,
    name: 'ความปลอดภัยกับลาซาด้า',
  },
  {
    id: 8,
    name: 'สินค้ายอดนิยม',
  },
  {
    id: 9,
    name: 'ร่วมงานกับเรา',
  },
  {
    id: 10,
    name: 'Intellectual Property Protection',
  },
]

const delivary = [

  {
    id: 1,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-l-1.png',
  },
  {
    id: 2,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-b-1.png',
  },
  {
    id: 3,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-b-11.png',
  },
  {
    id: 4,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-f-1.png',
  },
  {
    id: 5,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-g-1.png',
  },
  {
    id: 6,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-k-1.png',
  },
  {
    id: 7,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-l-1.png',
  },
  {
    id: 8,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-n-1.png',
  },
  {
    id: 9,
    name: 'ฟรีค่าจัดส่ง',
    Image: '/images/icon-l-1.png',
  },
]

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
const Footer = () => {
  return (
    <footer className='container mx-auto'>
      <div className='grid grid-cols-4 gap-4 p-4'>
        <div>
          <h1 className='text-2xl font-bold'>ศูนย์ดูแลลูกค้า</h1>
          <ul>
            {data.map((item) => (
              <li key={item.id} className='text-sm'>
                <a href='#' className=' text-indigo-800 hover:underline'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>ลาซาด้า</h1>
          <ul>
            {data2.map((item) => (
              <li key={item.id} className='text-sm'>
                <a href='#' className=' text-indigo-800 hover:underline'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex'>
          <a href='#' className=''>
            <Image src="/images/icon-lazada.png" alt="facebook" width={500} height={500} className="h-12 w-16" />
          </a>
          <div>
            <p className='text-sm text-orange-500'>
              Go where your heart beats
            </p>
            <p className='text-xs'>
              Download the App
            </p>
          </div>
        </div>
        <div>
          <a href='https://apps.apple.com/app/lazada-best-shopping-online/id785385147'>
            <Image
              src='/images/pngegg.png'
              alt='app-store'
              width={150}
              height={50}
            />
          </a>
        </div>
      </div >
      <div className='flex flex-row'>
        <div className='basis-1/2'>
          <h1 className='text-base text-gray-500'>วิธีการชำระเงิน</h1>
          <div className='flex'>
            {[...Array(2)].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 ml-2">
                <a href='#'>
                  <Image src='/images/pngwing.com.png' alt='visa' width={70} height={40} className="h-18 w-18" />
                </a>
                <a href='#'>
                  <Image src='/images/Master_Card_Payment_Icon.ico' alt='mastercard' width={70} height={80} className="h-18 w-18" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='basis-1/4'>
          <h1 className='text-base text-gray-500'>Delivery Services</h1>
          <div className='grid grid-cols-3 gap-0'>
            {delivary.map((item) => (
              <div key={item.id} className='items-center'>
                <a href='#'>
                  <Image src={item.Image} alt='visa' width={80} height={50} className="h-18 w-18 object-cover object-center" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='basis-1/4'>
          <h1 className='text-base text-gray-500'>Verified by</h1>
          <div className='flex flex-col items-start justify-start space-x-4'>
            <Image src='/images/v-1.png' alt='logo-1' width={80} height={50} className="h-18 w-18" />
            <Image src='/images/v-2.png' alt='logo-v-1' width={80} height={50} className="h-18 w-18 object-fill" />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-8'>
        {[...Array(4)].map((item, index) => (
          <div key={index} className='flex flex-col space--4'>
            <h1 className='text-sm text-gray-800'>ประสบการณ์การช้อปปิ้งที่ดีที่สุดที่ลาซาด้าประเทศไทย ลาซาด้า นิยามใหม่ของ “การช้อปที่แสนสะดวก”</h1>
            <p className=' text-xs text-gray-500'>
              ในขณะที่การช้อปปิ้งออนไลน์แพร่หลายมากขึ้นลาซาด้ประเทศไทยมีความมุ่งมั่นที่จะตอบโจทย์ความต้องการของผู้บริโภคอยู่เสมอ เราพยายามอย่างเต็มที่เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุดผ่านการทำธุรกรรมที่ราบรื่น ผนวกกับการกำหนดราคาสินค้าที่น่าดึงดูด เรามีการพัฒนา ประเภทของสินค้า ที่วางจำหน่ายใ นราคาที่ดีที่สุด เพื่อสร้างความพึงพอใจให้กับลูกค้าของเรา พร้อมกับกิจกรรมที่น่าดึงดูดใจ อาทิ ดีลเด็ด แฟลชเซลล์ และโปรโมชั่นดีๆ ที่มีอย่างต่อเนื่อง ด้วยโลโก้ใหม่รูป “หัวใจ” ที่แสดงตัวอักษร “L” เป็นกล่องสามมิติ
            </p>
            <p className=' text-xs text-gray-500'>
              ลาซาด้ามุ่งมั่นที่จะมอบวิธีการที่ดีกว่าและแตกต่างจากผู้ให้บริการอื่นๆ เพื่อให้แน่ใจว่าการทำทุกธุรกรรมบนแพลตฟอร์มของลาซาด้านั้นเป็นไปด้วยความง่ายอย่างแท้จริง มากกว่าไปกว่านั้น สโลแกนใหม่ “มีทุกสิ่งที่ใจค้นหา” แสดงถึงวิสัยทัศน์ของบริษัทที่มุ่งมั่นที่จะพัฒนาประสบการณ์ของผู้ซื้อและผู้ขายออนไลน์ผ่านการค้าและเทคโนโลยีที่ล้ำสมัย โลโก้ของหัวใจที่มีสีสันแสดงให้เห็นถึงความอ่อนเยาว์และมีพลัง ซึ่งเป็นสัญลักษณ์ของความมีชีวิตชีวาของการช้อปปิ้งและยุคดิจิตอลในปัจจุบัน
            </p>
            <h1 className='text-sm text-gray-800'>การช้อปปิ้งที่ง่ายและสะดวก</h1>
            <p className=' text-xs text-gray-500'>
              “การช้อปปิ้งที่ง่ายและสะดวก” เป็นเป้าหมายของลาซาด้าตลอดหลายปีที่ผ่านมา โดยให้คำสัญญากับลูกค้าทุกคนว่าเราจะให้ประสบการณ์การช้อปปิ้งออนไลน์ที่สะดวกสบายแบบไร้ความยุ่งยากใดๆ เราได้ออกแบบทุกสิ่งที่อำนวยความสะดวกในการค้นหาผ่านเว็บไซต์และแอพเพื่อการใช้งานที่ง่าย มีการจัดสรรผลิตภัณฑ์ไว้ใต้หมวดหมู่เดียวกัน รวมถึงคำอธิบายที่เกี่ยวข้องและรีวิวสินค้านั้นๆอย่างเปิดเผย
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8  border-t border-gray-200 px-8  md:flex md:items-center md:justify-between">
        <div className="flex flex-col space-x-6 md:order-2">
          <h3 className=' text-base font-medium text-gray-500'>Follow Us</h3>
          <div className='flex space-x-4 '>
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
          &copy;  Lazada 2023
        </p>
      </div>
    </footer >
  )
}

export default Footer