import { Poppins } from "next/font/google";

import { Card } from "@components/Card";
import { Title } from "@components/Title";
import { Header } from '@components/Header'
import { Footer } from '@components/Footer';
import { Container } from "@components/Container";
import { GlobalContainer } from "@components/GlobalContainer";

import HospitalRoomSVG from '@assets/hospital-room.svg'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function Orientations() {
  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 self-center w-full">
        <Title as="h1" className="text-3xl">Orientações</Title>

        <div className="grid grid-cols-3 my-4 w-5/6 gap-4">
          <Card 
            label="Vir e permanecer de máscara"
          />
          <Card 
            label="Não circular pelo Hospital, permanecer apenas no quarto e em outros ambientes quando necessário, evitando risco de contaminação"
          />
          <Card 
            label="Trazer objetos de higiene para uso próprio e uso do paciente."
          />

          <Card 
            label="Auxiliar o paciente quando necessário, e em situações especiais acionar a equipe de enfermagem através da campainha"
          />
          
          <Card 
            label="As refeições serão fornecidas pelo hospital apenas para acompanhantes de pacientes menores de 18 e maiores de 60 e em casos solicitados pelo médico"
          />
          
          <Card 
            label="Não fotografar ou realizar imagens de funcionários, procedimentos ou das dependências do hospital. (O descumprimento poderá acarretar medidas judiciais)"
          />
          
          <Card 
            label="O não cumprimento das normas e rotinas, assim como a interferência no trabalho da equipe, acarretará a suspensão do acompanhante"
          />          
          
          <Card 
            label="Troca de acompanhante para ALA autorizada serão nos horários das 08:00 ás 09:00, 12:00 ás 14:00 e das 19:00 ás 20:00"
          />
          
          <Card 
            label="Somente será permitido entrada de alimentos com autorização do médico responsável ou da nutricionista"
          />
        </div>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}