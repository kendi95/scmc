import { Form } from "@components/Form";
import { Input } from "@components/Input";
import { Title } from "@components/Title";
import { Header } from '@components/Header'
import { Button } from "@components/Button";
import { Footer } from '@components/Footer';
import { TextArea } from "@components/TextArea";
import { Container } from "@components/Container";
import { GlobalContainer } from "@components/GlobalContainer";
import { Paragraph } from "@components/Paragraph";
import { InputMask } from "@components/InputMask";
import { Select } from "@components/Select";

import { subjects } from "@utils/subjects";

export default function OmbudsmanOffice() {
  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 self-center w-full">
        <Title as="h1" className="text-3xl">Ouvidoria</Title>

        <div className="flex flex-col my-4 w-2/4">
          <Paragraph className="mt-1">
            A Santa Casa de Cambé disponibiliza o serviço de Ouvidoria, que é 
            o canal de comunicação entre as áreas do hospital e os clientes e 
            suas famílias. Para críticas, sugestões ou elogios, preencha o 
            formulário abaixo para entrar em contato com a nossa equipe.
          </Paragraph>
        </div>

        <Form className="h-full mt-2">
          <Input placeholder="Nome completo" />

          <div className="flex items-center justify-between w-full gap-4 mb-1">
            <Input placeholder="Endereço de email" type="email" />
            <InputMask 
              placeholder="(00) 00000-0000" 
              mask="(00) 00000-0000" 
              type="tel"
            />
          </div>

          <Select values={subjects} />

          <TextArea placeholder="Digite aqui sua mensagem..." />

          <Button type="button" className="my-6">Enviar</Button>
        </Form>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}