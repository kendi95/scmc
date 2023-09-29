import { ReactNode } from "react"

interface GlobalContainerProps {
  children: ReactNode
}

export function GlobalContainer({ children }: GlobalContainerProps) {
  return (
    <div 
      className="
        w-screen 
        h-screen 
        overflow-x-hidden 
        bg-gray-100 
        flex 
        flex-col
      "
    >
      {children}
    </div>
  )
}