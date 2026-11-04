export interface NavLink {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: 'Universo da Obra',
  tagline: 'Guia especializado em impermeabilização, impermeabilizantes e combate à umidade.',
  description:
    'Portal brasileiro de referência em impermeabilização residencial e predial: comparativos técnicos dos melhores impermeabilizantes, guias práticos e soluções definitivas contra infiltrações e mofo.',
  /**
   * Domínio pretendido configurado centralmente (provisório até ativação oficial).
   * Altere este valor e o astro.config.mjs quando o domínio definitivo estiver ativo.
   */
  domain: 'https://universodaobra.com',
  locale: 'pt-BR',
  responsible: 'Guilherme',
  contactEmail: 'contato@universodaobra.com',
  contactPhone: '(87) 98115-6789',
  contactPhoneRaw: '5587981156789',
  contactHours: 'Segunda a sexta, das 9h às 18h',
  address: {
    street: 'Rua Severiano José Freire, Centro',
    city: 'Arcoverde',
    state: 'PE',
    zip: '56506-470',
    country: 'Brasil',
    formatted: 'Rua Severiano José Freire, Centro — Arcoverde - PE, CEP 56506-470',
  },
  navLinks: [
    { label: 'Início', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Sobre', href: '/sobre/' },
    { label: 'Contato', href: '/contato/' },
  ] satisfies NavLink[],
  legalLinks: [
    { label: 'Política de Privacidade', href: '/politica-de-privacidade/' },
    { label: 'Termos de Uso', href: '/termos-de-uso/' },
  ] satisfies NavLink[],
} as const;
