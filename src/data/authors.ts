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
    specialty: 'Especialista editorial em materiais e impermeabilização',
    mainArea: 'Produtos, materiais e soluções contra umidade.',
    image: '/images/Autores/Guilherme Martins.webp',
    imageAlt: 'Foto de Guilherme Martins, especialista editorial em materiais e impermeabilização',
    portalFunction:
      'Guilherme é responsável pelos conteúdos sobre materiais utilizados na construção e reforma, com foco inicial em impermeabilizantes.',
    whatHeDoes: [
      'Produz análises e comparativos de impermeabilizantes.',
      'Explica diferenças entre produtos, composições e aplicações.',
      'Desenvolve guias de compra e artigos do tipo "qual o melhor".',
      'Pesquisa características, indicações e recomendações dos fabricantes.',
      'Ajuda o leitor a entender qual produto pode atender melhor a cada necessidade.',
    ],
    editorialProfile:
      'Guilherme tem um perfil de redator técnico e pesquisador de produtos. Sua abordagem editorial é baseada na comparação de especificações, leitura de fichas técnicas e organização de informações de fabricantes.',
    topics: [
      'Impermeabilizantes para paredes externas.',
      'Impermeabilizantes para lajes e telhados.',
      'Produtos contra infiltração e umidade.',
      'Seladores, mantas e aditivos impermeabilizantes.',
      'Tintas e revestimentos de proteção.',
      'Comparativos e avaliações de produtos.',
    ],
    writingStyle:
      'Objetivo, detalhista e comparativo. Explica os critérios de escolha sem exagerar nas promessas.',
  },
  {
    id: 'rafael-oliveira',
    slug: 'rafael-oliveira',
    name: 'Rafael Oliveira',
    role: 'Redator 02',
    specialty: 'Especialista editorial em construção e reforma',
    mainArea: 'Técnicas, materiais e planejamento de obras.',
    image: '/images/Autores/Rafael Oliveira.webp',
    imageAlt: 'Foto de Rafael Oliveira, especialista editorial em construção e reforma',
    portalFunction:
      'Rafael é responsável por conteúdos educativos sobre construção, reforma e manutenção residencial, ajudando o leitor a compreender como diferentes etapas de uma obra funcionam.',
    whatHeDoes: [
      'Explica processos e etapas de construção e reforma.',
      'Produz tutoriais e guias práticos.',
      'Aborda problemas comuns em residências e suas possíveis soluções.',
      'Explica diferenças entre técnicas e materiais.',
      'Organiza informações para quem está planejando uma obra.',
    ],
    editorialProfile:
      'Rafael tem perfil de pesquisador de construção civil e redator educativo. Seu trabalho editorial prioriza a explicação de processos, a pesquisa de fontes técnicas e a transformação de assuntos complexos em textos fáceis de compreender.',
    topics: [
      'Preparação de paredes e superfícies.',
      'Reboco, argamassa e alvenaria.',
      'Pintura e preparação para acabamento.',
      'Reformas residenciais.',
      'Manutenção preventiva.',
      'Problemas de umidade, rachaduras e infiltrações.',
    ],
    writingStyle:
      'Didático, organizado e prático. Explica o motivo de cada procedimento e quando é necessário procurar um profissional qualificado.',
  },
];

export function getAuthorBySlug(slug: string): AuthorItem | undefined {
  return AUTHORS.find((author) => author.slug === slug);
}
