import Link from 'next/link'
import { Poppins } from 'next/font/google';
import { 
  FacebookLogo, 
  InstagramLogo, 
  WhatsappLogo, 
  CaretRight, 
  Phone, 
  Envelope,
  MapPin,
  Copyright
} from '@phosphor-icons/react'

import { Container } from "./Container";
import { Title } from "./Title";

import { linksMenu } from '@utils/links'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export function Footer() {
  return (
    <footer className="h-4/5 bg-blue-500">
      <div className="flex items-start justify-evenly p-8">
        <Container>
          <Title as="h1" className="text-white text-2xl self-start">Menu</Title>

          <ul className="flex flex-col gap-1 mt-1">
            {linksMenu.map(link => (
              <li 
                key={link.nav} 
                className={`
                  ${poppins.className} 
                  text-sm
                  font-semibold 
                  text-gray-100
                  flex
                  items-center
                  gap-2
                  hover:text-blue-300
                `}
              >
                <CaretRight size={20} />
                <Link href={link.href}>{link.nav}</Link>
              </li>
            ))}
          </ul>
        </Container>

        <Container>
          <Title as="h1" className="text-white text-2xl self-start">Contato</Title>

          <div className="flex items-center gap-2 mt-2 text-gray-100 self-start">
            <Phone size={28} />
            <strong className={`${poppins.className} text-sm`}>(43) 3174-3100</strong>
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-100 self-start">
            <Envelope size={28} />
            <strong className={`${poppins.className} text-sm`}>
              contato@santacasadecambe.com.br
            </strong>
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-100 self-start">
            <MapPin size={28} />
            <strong className={`${poppins.className} text-sm`}>
              Rua Suissa, 220 - Centro, Cambé - PR
            </strong>
          </div>
        </Container>

        <Container>
          <Title as="h1" className="text-white text-2xl">Redes Sociais</Title>
          
          <div className="flex gap-2 mt-2">
            <Link 
              href="https://facebook.com/santacasadecambe"
              target="_blank"
              className="
                w-10
                h-10
                rounded-full 
                bg-gray-100 
                text-blue-600
                flex 
                items-center 
                justify-center 
                hover:bg-blue-600
                hover:text-gray-100
                hover:duration-300
              "
            >
              <FacebookLogo size={24} />
            </Link>

            <Link 
              href="https://www.instagram.com/santacasadecambe/"
              target="_blank"
              className="
                w-10 
                h-10 
                rounded-full 
                bg-gray-100 
                flex 
                items-center 
                justify-center 
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                hover:opacity-80
                hover:duration-500
              "
            >
              <InstagramLogo size={24} className="text-white" />
            </Link>

            <Link 
              href="https://api.whatsapp.com/send?phone=4331743100"
              target="_blank"
              className="
                w-10 
                h-10 
                rounded-full 
                bg-gray-100 
                text-green-700
                flex 
                items-center 
                justify-center 
                hover:bg-green-700
                hover:text-gray-100
                hover:duration-300
              "
            >
              <WhatsappLogo size={24} />
            </Link>
          </div>
        </Container>
      </div>

      <div 
        className="
          flex 
          items-center 
          justify-center 
          gap-1 
          w-full 
          h-12 
          bg-blue-700 
          text-gray-100
        "
      >
        <Copyright size={20} />
        <strong className={`${poppins.className} text-sm`}>
          2023 Todos os direitos reservados | Santa Casa de Cambé
        </strong>
      </div>
    </footer>
  )
}