import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CaretUpDown, Check } from '@phosphor-icons/react'
import { Poppins } from 'next/font/google'

export type SelectValue = {
  id: number
  name: string
  unavailable: boolean
}

interface SelectProps {
  values: SelectValue[]
}

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export function Select({ values }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<SelectValue>(values[0])

  return (
    <Listbox 
      value={selectedValue} 
      onChange={setSelectedValue} 
      by="id"
    >
      <Listbox.Button 
        className={`
          ${poppins.className}
          flex
          justify-between
          w-full 
          h-12 
          bg-gray-300 
          rounded-lg 
          p-4 
          my-2
          text-gray-700 
          text-sm
          font-bold
          outline-none
          text-left
        `}
      >
        {selectedValue?.name}
        <CaretUpDown size={16} className="text-gray-500" />
      </Listbox.Button>

      <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="w-full"
      >
        <Listbox.Options
          className={`
            ${poppins.className}
            rounded-lg 
            bg-gray-300 
            text-sm
            font-medium
            outline-none
            text-left
            overflow-y-scroll
            w-full
            h-56
          `}
        >
          {values.map((value) => (
            <Listbox.Option
              key={value.id}
              value={value}
              disabled={value.unavailable}
              className={`
                ${poppins.className}
                px-4
                py-3 
                flex 
                justify-between 
                items-center 
                cursor-pointer 
                ${selectedValue?.id !== 0 && selectedValue?.id === value.id ? 'text-gray-900' : 'text-gray-700'}
                ${selectedValue?.id !== 0 && selectedValue?.id === value.id ? 'font-bold' : 'font-medium'}
                hover:bg-gray-400
                hover:duration-100
              `}
            >
              {value.name}
              {selectedValue?.id !== 0 && selectedValue?.id === value.id && (
                <Check size={20} className="text-green-800" />
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}