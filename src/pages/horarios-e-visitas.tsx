import { Title } from "@components/Title";
import { Header } from '@components/Header'
import { Footer } from '@components/Footer';
import { Container } from "@components/Container";
import { Paragraph } from "@components/Paragraph";
import { GlobalContainer } from "@components/GlobalContainer";

export default function HoursAndVisits() {
  return (
    <GlobalContainer>
      <Header />

      <Container className="mt-32 self-center w-full">
        <Title as="h1" className="text-3xl">Horários e Visitas</Title>

        <div className="flex flex-col my-4 w-2/4">
          <Paragraph className="mt-1">
            A visita é um momento muito importante na recuperação dos pacientes. 
            O contato com amigos e familiares promove um conforto emocional 
            que contribui para o sucesso do tratamento. Mas, apesar da constante 
            necessidade de atenção e carinho, o repouso e a tranquilidade 
            são essenciais para o restabelecimento da saúde do paciente. 
            Por isso, as visitações devem obedecer a parâmetros que garantam a 
            rápida recuperação e a segurança do internado e a busca pela 
            eficácia dos procedimentos médicos.
          </Paragraph>
          <Paragraph className="mt-1">
            Para segurança de todos, os visitantes devem, obrigatoriamente, se 
            identificar na Recepção de Identificação apresentando documento 
            oficial com foto. Neste momento, é fornecida uma etiqueta de 
            identificação, que deve ser utilizada em local visível pelo 
            visitante enquanto permanecer nas dependências do hospital.
            Por motivo de segurança, são admitidos o máximo de três visitantes 
            por dia para Unidade de Terapia Intensiva (UTI Adulto), autorizados 
            a partir de 16 anos de idade.
          </Paragraph>
          <Paragraph className="mt-1">
            Na Unidade de Internação Clínica, Maternidade e Pediatria são 
            autorizados o máximo de quatro visitantes por vez. Neste caso, os 
            visitantes autorizados devem ter a partir de 12 anos de idade. 
            Caso seja menor de 12 anos, o responsável pelo menor deverá assinar 
            um termo de responsabilidade no ato da identificação.
          </Paragraph>
          <Paragraph className="mt-1">
            Obs. Menores de 12 anos de idade devem ser identificados com a 
            apresentação da certidão de nascimento ou outro documento que o 
            identifique.
          </Paragraph>
        </div>
      </Container>

      <Footer />
    </GlobalContainer>
  )
}