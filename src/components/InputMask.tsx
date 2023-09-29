import { Poppins } from 'next/font/google'
import { InputHTMLAttributes } from 'react'
import { IMaskInput } from 'react-imask'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: Date | Number | string
}

export function InputMask({ className, mask, ...rest }: InputProps) {
  return (
    <IMaskInput 
      {...rest} 
      mask={mask}
      className={`
        ${className}
        ${poppins.className}
        w-full 
        h-12 
        bg-gray-300 
        rounded-lg 
        p-4 
        my-2
        text-gray-800 
        text-sm
        font-medium
        outline-none
        placeholder-gray-500
      `} 
    />
  )
}