import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main className={`flex flex-col items-center ${className} max-w-screen-2xl`}>
      {children}
    </main>
  )
}