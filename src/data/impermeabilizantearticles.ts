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
    id: 'demo-impermeabilizacao-lajes',
    title: 'Como escolher o impermeabilizante ideal para lajes, paredes e áreas úmidas',
    description:
      'Entenda as diferenças entre sistemas rígidos e flexíveis e saiba o que observar antes de impermeabilizar cada ambiente da casa.',
    category: 'Impermeabilização de Lajes',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração técnica representando proteção contra umidade em superfície de concreto',
    isDemo: true,
  },
  {
    id: 'demo-manta-liquida-asfaltica',
    title: 'Manta Líquida vs. Manta Asfáltica: Qual a Melhor para a sua Laje?',
    description:
      'Compare elasticidade, facilidade de aplicação e custo por metro quadrado para decidir entre manta líquida e manta asfáltica.',
    category: 'Mantas Líquidas e Asfálticas',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração de aplicação de manta protetora em laje exposta',
    isDemo: true,
  },
  {
    id: 'demo-umidade-rodape',
    title: 'Umidade no Rodapé: Como Eliminar a Infiltração por Capilaridade',
    description:
      'Veja o método comprovado para raspar o reboco contaminado com salitre e aplicar bloqueadores químicos de umidade ascendente.',
    category: 'Diagnóstico de Umidade e Mofo',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração de tratamento de parede contra umidade ascendente',
    isDemo: true,
  },
  {
    id: 'demo-impermeabilizante-selador',
    title: 'Qual a Diferença entre Impermeabilizante e Selador na Parede?',
    description:
      'Entenda a função de cada produto no preparo da alvenaria e descubra por que o selador comum não impede a penetração da água.',
    category: 'Impermeabilização de Paredes',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração de comparação de camadas e proteção na parede',
    isDemo: true,
  },
  {
    id: 'demo-alicerce-baldrame',
    title: 'Impermeabilização de Alicerce e Baldrame: Como Proteger a Fundação',
    description:
      'Guia prático sobre o uso de tintas asfálticas e argamassas poliméricas para blindar vigas baldrame durante a fase de fundação.',
    category: 'Alicerce e Baldrame',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração de impermeabilização na etapa de alicerce e fundação',
    isDemo: true,
  },
  {
    id: 'demo-hidrofugante-pedras',
    title: 'Hidrofugante para Tijolo Aparente e Pedras: Proteção Sem Alterar o Brilho',
    description:
      'Como proteger fachadas rústicas, tijolos e pedras naturais contra manchas de chuva e limo mantendo o aspecto fosco original.',
    category: 'Telhados e Calhas',
    image: '/images/articles/impermeabilizacao.svg',
    imageAlt: 'Ilustração de proteção impermeável invisível em superfície mineral',
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
  'Impermeabilização de Paredes',
  'Impermeabilização de Lajes',
  'Telhados e Calhas',
  'Alicerce e Baldrame',
  'Mantas Líquidas e Asfálticas',
  'Diagnóstico de Umidade e Mofo',
] as const;
