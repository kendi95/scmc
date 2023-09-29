import { ReactNode } from "react"

interface ParagraphProps {
  children: ReactNode
  className?: string
}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={`text-sm font-medium text-justify text-gray-500 ${className}`}>{children}</p>
  )
}