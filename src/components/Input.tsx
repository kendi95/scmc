import { Poppins } from 'next/font/google'
import { InputHTMLAttributes } from 'react'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input 
      {...rest} 
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