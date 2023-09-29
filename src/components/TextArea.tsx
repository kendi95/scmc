import { Poppins } from 'next/font/google'
import { TextareaHTMLAttributes } from 'react'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea 
      {...rest} 
      className={`
        ${poppins.className}
        w-full
        h-60
        rounded-lg
        bg-gray-300 
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