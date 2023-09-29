import { Form } from "@components/Form";
import { Input } from "@components/Input";
import { Title } from "@components/Title";
import { Header } from '@components/Header'
import { Button } from "@components/Button";
import { Footer } from '@components/Footer';
import { Container } from "@components/Container";
import { GlobalContainer } from "@components/GlobalContainer";
import { Paragraph } from "@components/Paragraph";
import { InputFile } from "@components/InputFile";
import { Select } from "@components/Select";

import { positions } from '@utils/target-position'
import { educations } from "@utils/education-degree";
import { InputMask } from "@components/InputMask";

export default function WorkUs() {
  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 self-center w-full">
        <Title as="h1" className="text-3xl">Trabalhe conosco</Title>

        <div className="flex flex-col my-4 w-2/4">
          <Title as="h4" className="text-lg">Porque trabalhar na Santa Casa de Cambé?</Title>

          <Paragraph className="mt-1">
            A Santa Casa de Misericórdia de Cambé possui uma equipe formada por 
            colaboradores, médicos, terceiros e voluntários, comprometida com os 
            valores institucionais da ética, profissionalismo, credibilidade, 
            trabalho em equipe e respeito ao ser humano. Em 2016 completamos 
            80 anos de história, prestando assistência à saúde de forma segura 
            e humanizada, focada na melhoria contínua dos processos e no 
            desenvolvimento permanente da equipe profissional.
          </Paragraph>
          <Paragraph className="mt-1.5">
            Somos referência no atendimento em Urgência e Emergência Adulto, 
            alta complexidade em Neurocirurgia, Traumatologia, Ortopedia e 
            Oncologia para Jaraguá do Sul e as demais cidades da Região Norte e 
            Nordeste de Santa Catarina. Se você se identifica com os nossos 
            valores, queremos conhecê-lo! Venha fazer parte da nossa equipe!
          </Paragraph>
          <Paragraph className="mt-1.5">
            Venha fazer parte de nossa equipe! Preencha os campos abaixo e 
            encaminhe em anexo seu currículo, que será avaliado conforme as 
            vagas disponíveis.
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

          <Select values={positions} />
          <Select values={educations} />

          <InputFile 
            title="Selecione um currículo" 
            className="self-start mt-1" 
            onChangeFile={(file) => console.log(file)}
          />
            
          <Button type="button" className="my-6">Enviar</Button>
        </Form>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}