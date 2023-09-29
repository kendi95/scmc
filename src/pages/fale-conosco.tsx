import { Poppins } from 'next/font/google'

import { Form } from "@components/Form";
import { Input } from "@components/Input";
import { Title } from "@components/Title";
import { Header } from '@components/Header'
import { Button } from "@components/Button";
import { Footer } from '@components/Footer';
import { TextArea } from "@components/TextArea";
import { Container } from "@components/Container";
import { GlobalContainer } from "@components/GlobalContainer";

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

const characterLimit = 500

export default function ContactUs() {

  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 mb-24 h-3/4 self-center w-full">
        <Title as="h1" className="text-3xl">Fale conosco</Title>

        <Form className="h-full mt-2">
          <Input placeholder="Nome completo" />

          <div className="flex items-center justify-between w-full gap-4 mb-1">
            <Input placeholder="Endereço de email" type="email" />
            <Input placeholder="(xx) xxxxx-xxxx" type="tel" />
          </div>

          <TextArea placeholder="Digite aqui sua mensagem..." />

          <span className={`${poppins.className} -mt-1 self-end text-gray-700 text-xs`}>
            0 / {characterLimit}
          </span>

          <Button type="button" className="my-6">Enviar</Button>
        </Form>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}