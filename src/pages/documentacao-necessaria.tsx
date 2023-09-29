import { List } from "@components/List";
import { Title } from "@components/Title";
import { Header } from '@components/Header'
import { Footer } from '@components/Footer';
import { Container } from "@components/Container";
import { GlobalContainer } from "@components/GlobalContainer";

import { documentations } from '@utils/documentations'

export default function RequestDocumentation() {
  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 self-center w-full">
        <Title as="h1" className="text-3xl">Documentação necessária</Title>

        <div className="flex flex-col my-4 w-2/4">
          <Title as="h3" className="text-xl">
            Documentação necessária para o primeiro atendimento no SCC
          </Title>

          <Title as="h5" className="text-base mt-4">
            Paciente de Cambé / Londrina
          </Title>
          <List values={documentations.londrina} />

          <Title as="h5" className="text-base mt-4">
            Paciente de outras cidades
          </Title>
          <List values={documentations.outra_cidade} />

          <Title as="h5" className="text-base mt-4">
            Benefícios ao paciente em tratamento
          </Title>
          <List values={documentations.em_tratamento} />

          <Title as="h5" className="text-base mt-4">
            Crianças e Idosos
          </Title>
          <List values={documentations.crianca_idoso} />
        </div>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}