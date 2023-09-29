import { ReactNode } from "react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}
 
 
export function Title({ as : As, children, className }: TitleProps) {
  return (
    <As 
      className={`
        ${poppins.className} 
        ${className} 
        text-slate-800 
        font-semibold 
        text-3xl
      `}
    >
      {children}
    </As>
  )
}