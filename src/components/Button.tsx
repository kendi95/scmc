import { Poppins } from "next/font/google";
import { ButtonHTMLAttributes } from "react";

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button 
      {...rest}
      className={`
        ${className}
        ${poppins.className}
        w-full
        h-12
        bg-green-600
        rounded-lg
        text-sm
        font-bold
        outline-none
        text-gray-100
        hover:bg-green-700
        hover:text-white
        hover:duration-500
      `}
    >
      {children}
    </button>
  )
}