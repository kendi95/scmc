import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

interface CardPros {
  label: string
}

export function Card({ label }: CardPros) {
  return (
    <div 
      className="
        w-full 
        rounded-xl 
        bg-gray-200 
        p-6 
        flex 
      "
      >
      <span 
        className={`
          ${poppins.style} 
          font-medium 
          text-lg 
          leading-5 
          text-gray-800
          z-50
          text-justify
        `}
      >
        
        {label}
      </span>
    </div>
  )
}