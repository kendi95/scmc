import cuid from 'cuid'

export const documentations = {
  londrina: [
    { id: cuid(), label: 'Cartão do SUS' },
    { id: cuid(), label: 'Encaminhamento da Unidade Básica de Saúde' },
    { id: cuid(), label: 'RG (cópia e original)' },
    { id: cuid(), label: 'CPF (cópia e original)' },
    { id: cuid(), label: 'Comprovante de residência (cópia e original)' },
  ],
  outra_cidade: [
    { 
      id: cuid(), 
      label: 'Os documentos acima mais a TFD (guia de tratamento fora de domicílio)' 
    },
  ],
  em_tratamento: [
    { 
      id: cuid(), 
      label: 'Procurar o Serviço Social o qual fornece toda orientação e documentação necessária para utilização destes benefícios.' 
    }
  ],
  crianca_idoso: [
    { 
      id: cuid(), 
      label: 'As crianças (0-18 anos) e idosos acima de 60 anos terão direito garantido a um acompanhante durante o período de internação.' 
    }
  ]
}