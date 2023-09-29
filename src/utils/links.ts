export const linksMenu = [
  { nav: "Início", href: "/" },
  { nav: "Nossa história", href: "/nossa-historia" },
  { nav: "Corpo Clínico", href: "/corpo-clínico" },
  { nav: "Notícias", href: "/noticias" },
  { nav: "Faça sua doação", href: "/faca-sua-doacao" },
  { nav: "Agradecimentos", href: "/agradecimentos" },
  { nav: "Empresas Amigas", href: "/empresas-amigas" },
  { nav: "Cadastrar sua empresa", href: "/cadastrar-sua-empresa" },
  { nav: "Estrutura", href: "/estrutura" },
  { nav: "Serviço", href: "/servico" },
  { nav: "Horários e Visitas", href: "/horarios-e-visitas" },
  { nav: "Documentação necessária", href: "/documentacao-necessaria" },
  { nav: "Orientações", href: "/orientacoes" },
  { nav: "Fale conosco", href: "/fale-conosco" },
  { nav: "Trabalhe conosco", href: "/trabalhe-conosco" },
  { nav: "Ouvidoria", href: "/ouvidoria" },
]

export const links = [
  {
    nav: "Início",
    isSubNav: false,
    href: "/",
    subNavs: [],
  },
  {
    nav: "Sobre o hospital",
    isSubNav: true,
    href: "",
    subNavs: [
      { nav: "Nossa história", href: "/nossa-historia" },
      { nav: "Corpo clínico", href: "/corpo-clinico" },
      { nav: "Notícias", href: "/noticias" },
    ]
  },
  {
    nav: "Doações",
    isSubNav: true,
    href: "",
    subNavs: [
      { nav: "Faça sua doação", href: "/faca-sua-doacao" },
      { nav: "Agradecimentos", href: "/agradecimentos" },
      { nav: "Empresas amigas", href: "/empresas-amigas" },
      { nav: "Cadastrar sua empresa", href: "/cadastrar-sua-empresa" },
    ]
  },
  {
    nav: "Estrutura e Serviços",
    isSubNav: true,
    href: "",
    subNavs: [
      { nav: "Estrutura", href: "/estrutura" },
      { nav: "Serviços", href: "/servicos" },
    ]
  },
  {
    nav: "Paciente",
    isSubNav: true,
    href: "",
    subNavs: [
      { nav: "Horários e Visitas", href: "/horarios-e-visitas" },
      { nav: "Documentação necessária", href: "/documentacao-necessaria" },
      { nav: "Orientações", href: "/orientacoes" },
    ]
  },
  {
    nav: "Contato",
    isSubNav: true,
    href: "",
    subNavs: [
      { nav: "Fale conosco", href: "/fale-conosco" },
      { nav: "Trabalhe conosco", href: "/trabalhe-conosco" },
      { nav: "Ouvidoria", href: "/ouvidoria" },
    ]
  },
]