import { Poppins } from "next/font/google"
import { CaretRight } from '@phosphor-icons/react'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

type Value = {
  id: string
  label: string
}

interface ListProps {
  values: Value[]
}

export function List({ values }: ListProps) {
  return (
    <ul>
      {values.map(value => (
        <li 
          key={value.id}
          className={`
            ${poppins.className} 
            font-medium 
            text-gray-500 
            text-sm
            flex
            items-center
            gap-1
          `}
        >
          <CaretRight size={14} />
          {value.label}
        </li>

      ))}
    </ul>
  )
}