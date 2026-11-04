export interface AuthorItem {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialty: string;
  mainArea: string;
  image: string;
  imageAlt: string;
  portalFunction: string;
  whatHeDoes: string[];
  editorialProfile: string;
  topics: string[];
  writingStyle: string;
}

export const AUTHORS: AuthorItem[] = [
  {
    id: 'guilherme-martins',
    slug: 'guilherme-martins',
    name: 'Guilherme Martins',
    role: 'Redator 01',
    specialty: 'Especialista em impermeabilizantes, laudos técnicos e testes de rendimento',
    mainArea: 'Análises comparativas de impermeabilizantes, lajes, paredes e coberturas.',
    image: '/images/Autores/Guilherme Martins.webp',
    imageAlt: 'Foto de Guilherme Martins, especialista em impermeabilizantes e proteção contra umidade',
    portalFunction:
      'Guilherme é responsável pelos comparativos técnicos aprofundados e guias de compra dos melhores impermeabilizantes do mercado, analisando fichas químicas, rendimento por metro quadrado e custo-benefício para cada tipo de superfície.',
    whatHeDoes: [
      'Produz análises e comparativos aprofundados dos melhores impermeabilizantes do mercado.',
      'Analisa composições químicas (mantas acrílicas, asfálticas, argamassas poliméricas e hidrofugantes).',
      'Testa rendimento, elasticidade, tempo de cura e resistência a intempéries.',
      'Desenvolve guias técnicos de compra do tipo "qual o melhor impermeabilizante".',
      'Ajuda o leitor a escolher a blindagem certa para paredes externas, lajes, baldrames e telhados.',
    ],
    editorialProfile:
      'Guilherme tem um perfil analítico e técnico. Sua abordagem editorial baseia-se na comparação criteriosa de especificações de fabricantes, laudos técnicos e normas ABNT para garantir que o leitor invista no produto certo para estancar a água.',
    topics: [
      'Melhores impermeabilizantes para paredes externas e fachadas.',
      'Mantas líquidas e asfálticas para lajes expostas e calhas.',
      'Argamassas poliméricas e bloqueadores de umidade de rodapé.',
      'Aditivos impermeabilizantes para concreto, reboco e assentamento.',
      'Hidrofugantes e resinas acrílicas para tijolos aparentes e pedras.',
      'Comparativos entre marcas líderes (Vedacit, Sika, Quartzolit, Bautech, Dryko).',
    ],
    writingStyle:
      'Analítico, objetivo e comparativo. Detalha características químicas e rendimento real sem promessas milagrosas.',
  },
  {
    id: 'rafael-oliveira',
    slug: 'rafael-oliveira',
    name: 'Rafael Oliveira',
    role: 'Redator 02',
    specialty: 'Especialista em aplicação prática, diagnóstico de infiltrações e preparo de superfícies',
    mainArea: 'Tutoriais de aplicação passo a passo, eliminação de mofo e reparo de reboco.',
    image: '/images/Autores/Rafael Oliveira.webp',
    imageAlt: 'Foto de Rafael Oliveira, especialista em aplicação prática de impermeabilizantes',
    portalFunction:
      'Rafael é responsável pelos tutoriais práticos de impermeabilização passo a passo no Universo da Obra, ensinando a diagnosticar a causa exata da umidade e a preparar a alvenaria para que a proteção seja definitiva.',
    whatHeDoes: [
      'Produz tutoriais práticos de aplicação de impermeabilizantes passo a passo.',
      'Ensina a identificar a origem da umidade (capilaridade, infiltração externa ou condensação).',
      'Explica a preparação de superfícies, raspagem de reboco degradado e tratamento de mofo.',
      'Orienta sobre a estruturação de cantos e trincas com tela de poliéster e fita veda trinca.',
      'Ajuda o leitor a executar a impermeabilização sem erros, evitando retrabalho e gastos extras.',
    ],
    editorialProfile:
      'Rafael alia experiência prática de canteiro de obras à didática clara e acessível. Seu trabalho editorial é focado em transformar processos complexos de impermeabilização em roteiros simples e seguros para proprietários e profissionais.',
    topics: [
      'Como impermeabilizar paredes internas e externas com umidade.',
      'Tratamento definitivo de umidade ascendente e salitre no rodapé.',
      'Preparo correto de reboco, cura e neutralização antifúngica.',
      'Técnicas de demãos cruzadas e aplicação uniforme de membranas.',
      'Vedação de trincas, juntas de dilatação e meias-canas.',
      'Manutenção preventiva e inspeção periódica de barreiras impermeáveis.',
    ],
    writingStyle:
      'Didático, direto e orientado à prática. Explica o motivo de cada etapa de aplicação e destaca cuidados de segurança e ferramentas corretas.',
  },
];

export function getAuthorBySlug(slug: string): AuthorItem | undefined {
  return AUTHORS.find((author) => author.slug === slug);
}
