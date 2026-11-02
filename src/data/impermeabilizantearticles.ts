export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  url?: string;
  date?: string;
  /**
   * Indica que este card é um registro demonstrativo do layout inicial,
   * antes da publicação de artigos reais.
   */
  isDemo?: boolean;
}

/**
 * Seis registros demonstrativos de layout (conteúdo provisório).
 * Nenhum link quebrado é gerado; quando os artigos reais forem publicados,
 * basta fornecer a propriedade `url` com a rota real ou alimentar via Content Collections.
 */
export const DEMO_ARTICLES: ArticleItem[] = [
  {
    id: 'demo-impermeabilizacao',
    title: 'Como escolher o impermeabilizante ideal para lajes, paredes e áreas úmidas',
    description:
      'Entenda as diferenças entre sistemas rígidos e flexíveis e saiba o que observar antes de impermeabilizar cada ambiente da casa.',
    category: 'Impermeabilização',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração técnica representando proteção contra umidade em superfície de concreto',
    isDemo: true,
  },
  {
    id: 'demo-ferramentas',
    title: 'Ferramentas básicas para manutenção residencial: o que vale ter em casa',
    description:
      'Conheça os itens essenciais para pequenos reparos domésticos, instalações simples e ajustes do dia a dia com segurança.',
    category: 'Ferramentas',
    image: '/images/articles/ferramentas.svg',
    imageAlt: 'Ilustração de caixa de ferramentas e esquadro de medição',
    isDemo: true,
  },
  {
    id: 'demo-planejamento',
    title: 'Planejamento de reforma: etapas para organizar o cronograma e evitar retrabalho',
    description:
      'Veja em qual ordem executar demolições, instalações, revestimentos e acabamentos para manter sua obra sob controle.',
    category: 'Planejamento e Reforma',
    image: '/images/articles/planejamento.svg',
    imageAlt: 'Ilustração de planta arquitetônica com etapas de planejamento de obra',
    isDemo: true,
  },
  {
    id: 'demo-argamassas',
    title: 'Tipos de argamassa colante (AC-I, AC-II e AC-III): onde usar cada classificação',
    description:
      'Saiba como identificar a argamassa adequada para áreas internas, fachadas, pisos cerâmicos e porcelanatos.',
    category: 'Materiais de Construção',
    image: '/images/articles/materiais.svg',
    imageAlt: 'Ilustração de blocos de revestimento e linha de assentamento',
    isDemo: true,
  },
  {
    id: 'demo-pintura',
    title: 'Preparação de parede antes da pintura: lixamento, selador e massa corrida',
    description:
      'Um guia sobre as etapas de preparação da superfície que garantem melhor rendimento da tinta e acabamento duradouro.',
    category: 'Pintura e Acabamento',
    image: '/images/articles/pintura.svg',
    imageAlt: 'Ilustração de rolo de pintura aplicando faixa sobre parede preparada',
    isDemo: true,
  },
  {
    id: 'demo-manutencao',
    title: 'Checklist de manutenção preventiva residencial para fazer ao longo do ano',
    description:
      'Inspeções periódicas em telhados, calhas, rejuntes e instalações hidráulicas que ajudam a conservar o imóvel.',
    category: 'Manutenção Residencial',
    image: '/images/articles/manutencao.svg',
    imageAlt: 'Ilustração de estrutura residencial com símbolo de verificação preventiva',
    isDemo: true,
  },
];

export const REAL_ARTICLES: ArticleItem[] = [
  {
    id: 'melhor-impermeabilizante-para-paredes',
    title: 'Melhor Impermeabilizante para Paredes 12 Opções (2026)',
    description:
      'Cansado de mofo e infiltrações? Compare os melhores impermeabilizantes para parede (Vedacit, Sika, Quartzolit e mais) e escolha a proteção ideal!',
    category: 'Impermeabilização',
    image: '/images/blog/melhor-impermeabilizante-para-paredes.webp',
    imageAlt: 'Parede protegida contra umidade e infiltrações com impermeabilizante',
    url: '/melhor-impermeabilizante-para-paredes/',
    date: '02 nov 2026',
    isDemo: false,
  },
];

export const articles: ArticleItem[] = REAL_ARTICLES;

export const PLANNED_CATEGORIES = [
  'Impermeabilização',
  'Materiais de Construção',
  'Ferramentas',
  'Pintura e Acabamento',
  'Manutenção Residencial',
  'Planejamento e Reforma',
] as const;
