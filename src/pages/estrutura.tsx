import { Container } from "@components/Container";
import { Footer } from "@components/Footer";
import { GlobalContainer } from "@components/GlobalContainer";
import { Header } from "@components/Header";
import { Paragraph } from "@components/Paragraph";
import { Title } from "@components/Title";

export default function Structure() {
  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 mb-24 h-3/4 self-center w-full">
        <Title as="h1" className="text-3xl">Estrutura</Title>

        <div className="flex flex-col my-4 w-2/4">
          <Paragraph className="mt-1">
            A Santa Casa de Cambé conta com estrutura em fase de melhorias e 
            investimentos para melhor servir à população. O hospital é referência 
            para uma população de aproximadamente 138 mil habitantes e realiza 
            em média 2.500 atendimentos mensais
          </Paragraph>
        </div>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}