import { Fragment } from 'react'
import { Poppins } from 'next/font/google'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

import { links } from '@utils/links'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export function Navs() {
  const { pathname } = useRouter()

  return (
    <nav className='flex gap-2'>
      {links.map(link => {
        if (!link.isSubNav) {
          return (
            <a
              key={link.nav}
              className={`
                ${poppins.className} 
                ${link.href === pathname ? 'bg-slate-400' : 'bg-slate-300'}
                ${link.href === pathname ? 'text-gray-200' : 'text-gray-500'}
                font-semibold 
                text-sm
                py-3
                px-4
                mb-1
                rounded-lg
                hover:bg-slate-400
                hover:text-gray-200
                hover:duration-300
              `} 
              href={link.href}
            >
              {link.nav}
            </a>
          )
        }

        return (
          <Menu 
            key={link.nav}
            as="div" 
            className="relative inline-block text-left"
          >
            <Menu.Button
              className={`
                ${poppins.className} 
                font-semibold 
                text-gray-500 
                text-sm
                bg-slate-300
                py-3
                px-4
                mb-1
                rounded-lg
                hover:bg-slate-400
                hover:text-gray-200
                hover:duration-300
              `} 
            >
              {link.nav}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items 
                className="
                  flex 
                  flex-col 
                  bg-slate-300 
                  min-w-max
                  absolute 
                  right-0
                  gap-2 
                  rounded-xl
                  outline-none
                  text-gray-500 
                  font-semibold
                "
              >
                {link.subNavs.map(subNav => (
                  <Menu.Item key={subNav.nav}>
                    <a
                      className={`
                        p-2 
                        ${subNav.href === pathname ? 'bg-slate-400' : 'bg-slate-300'}
                        ${subNav.href === pathname ? 'text-gray-200' : 'text-gray-500'}
                        rounded-md
                      hover:bg-slate-400
                      hover:text-gray-200
                        hover:duration-300
                        hover:rounded-md
                      `}
                      href={subNav.href}
                    >
                      {subNav.nav}
                    </a>
                  </Menu.Item>

                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        )
      })}
    </nav>
  )
}