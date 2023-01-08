import React from 'react'


const navigation = [
  { name: 'อุปกรณ์ อิเล็กทรอนิกส์', href: '#', current: false },
  { name: 'อุปกรณ์เสริม อิเล็กทรอนิก', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  return (
    <nav className="space-y-1 bg-slate-50 h-full" aria-label="Sidebar">
      {navigation.map((item) => (
        <button
          type="button"
          key={item.name}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
            'flex items-center px-3 py-2 text-sm font-medium rounded-sm w-full'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
        </button>
      ))}
    </nav>
  )
}

export default Sidebar