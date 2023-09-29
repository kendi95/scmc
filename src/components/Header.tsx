import { Poppins } from "next/font/google";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react";

import { Navs } from "@components/Navs";

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center absolute top-0 left-0 right-0">
      <div className="bg-slate-400 w-full gap-16 flex justify-center pb-1">
        <div className="flex items-center h-6 gap-1 mt-1 text-gray-100">
          <Phone size={18} />
          <strong className={`${poppins.className} text-xs leading-5`}>(43) 3174-3100</strong>
        </div>
        <div className="flex items-center h-6 gap-1 mt-1 text-gray-100">
          <Envelope size={18} />
          <strong className={`${poppins.className} text-xs`}>
            contato@santacasadecambe.com.br
          </strong>
        </div>
        <div className="flex items-center h-6 gap-1 mt-1 text-gray-100">
          <MapPin size={18} />
          <strong className={`${poppins.className} text-xs`}>
            Rua Suissa, 220 - Centro, Cambé - PR
          </strong>
        </div>
      </div>
      <div className="flex justify-center w-full bg-slate-200">
        <div className="flex justify-between w-full max-w-screen-xl py-4 px-12">
          <h2>IMAGEM</h2>

          <Navs />
        </div>
      </div>
    </header>
  )
}