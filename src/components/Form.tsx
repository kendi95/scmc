import { ReactNode } from "react"

interface FormProps {
  children: ReactNode
  className?: string
}

export function Form({ children, className }: FormProps) {
  return (
    <form className={`w-2/4 h-52 flex flex-col items-center my-6 ${className}`}>
      {children}
    </form>
  )
}