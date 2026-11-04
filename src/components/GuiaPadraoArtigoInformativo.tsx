/**
 * ============================================================================
 * GUIA MESTRE E PADRÃO DE CRIAÇÃO DE ARTIGOS INFORMATIVOS E TUTORIAIS
 * (NOTA 100 NO PAGESPEED INSIGHTS — PASSO A PASSO, MANUTENÇÃO E "COMO FAZER")
 * Arquivo de Referência Universal — Universo da Obra (Construção, Reforma e Manutenção)
 * ============================================================================
 *
 * OBJETIVO DESTE ARQUIVO:
 * Servir como documentação definitiva, molde de código (.tsx / .astro) e
 * template de prompt genérico para criar QUALQUER artigo INFORMATIVO, TUTORIAL,
 * GUIA DE APLICAÇÃO ou "COMO FAZER" (ex.: "Como Impermeabilizar Parede",
 * "Qual a Diferença Entre Selador e Impermeabilizante", "Como Tratar Umidade no Rodapé",
 * "Como Preparar o Reboco para Pintura") no Universo da Obra mantendo 100 pontos no
 * Google PageSpeed (Performance, Acessibilidade, Práticas Recomendadas e SEO),
 * alta retenção do leitor, didática técnica impecável e conversão contextual em ferramentas/materiais.
 *
 * ----------------------------------------------------------------------------
 * PARTE 0: QUESTIONÁRIO PRÉ-ARTIGO (PERGUNTAS OBRIGATÓRIAS ANTES DE ESCREVER)
 * ----------------------------------------------------------------------------
 * Quando o usuário pedir: "olhe no GuiaPadraoArtigoInformativo.tsx e me faça as perguntas"
 * (ou quando for iniciar um novo tutorial ou artigo informativo), o assistente/IA
 * DEVE fazer exatamente as seguintes perguntas no chat e aguardar as respostas:
 *
 * ❓ 1. BANCOS DE DADOS E COMPONENTES ESPECÍFICOS DO ARTIGO:
 *    - Qual arquivo de catálogo de artigos deve receber este tutorial?
 *      • Opção 1: `src/data/impermeabilizantearticles.ts` (Nicho de Impermeabilização e Umidade)
 *      • Opção 2: `src/data/articles.ts` (Catálogo Geral / Outros Nichos)
 *      *(À medida que novos catálogos de nicho forem criados no projeto, adicione-os nesta lista)*
 *
 *    - Qual arquivo de banco de produtos deve ser usado para registrar/vincular ferramentas, materiais e insumos?
 *      • Opção 1: `src/data/impermeabilizanteproducts.ts` (Impermeabilizantes, mantas, seladores)
 *      • Opção 2: `src/data/crosssellproducts.ts` (Kits de pintura, telas de reforço, fitas veda trinca)
 *      • Opção 3: `src/data/products.ts` (Ferramentas e máquinas gerais)
 *
 *    - Qual componente de Banner do Meio deve ser importado?
 *      • Opção 1: `src/components/impermeabilizantes/BunnerDoMeioimpermeabilizante.tsx`
 *      • Opção 2: `src/components/BunnerDoMeio.tsx`
 *      *(Se estiver desativado no nicho retornando null, mantenha a importação para integridade estrutural)*
 *
 *    - Qual componente de Exit Intent Popup deve ser importado?
 *      • Opção 1: `src/components/impermeabilizantes/ExitIntentPopupimpermeabilizante.tsx`
 *      • Opção 2: `src/components/ExitIntentPopup.tsx`
 *
 * ❓ 2. PALAVRA-CHAVE PRINCIPAL, TÍTULO TUTORIAL E URL (SLUG):
 *    - Qual a palavra-chave principal (foco de SEO)? (ex.: "como impermeabilizar parede com umidade", "diferença entre impermeabilizante e selador")
 *    - Qual o título H1 didático e persuasivo do tutorial? (ex.: "Como Impermeabilizar Parede com Umidade em 4 Passos Práticos")
 *    - Qual será a URL amigável / slug exato da página Astro? (ex.: `src/pages/[slug-do-artigo].astro` -> `/[slug-do-artigo]/`)
 *
 * ❓ 3. AUTOR DO ARTIGO:
 *    - Quem é o autor responsável pelo artigo?
 *      • `rafael-oliveira` (Rafael Oliveira — Especialista em Construção, Reforma e Processos Práticos)
 *      • `guilherme-martins` (Guilherme Martins — Especialista em Materiais, Fichas Técnicas e Impermeabilizantes)
 *      • Ou outro autor registrado em `src/data/authors.ts`
 *    *(Isso define a assinatura "Por [Foto 32x32 alt="" aria-hidden="true"] [Nome]" com link para `/autores/[slug]/` logo abaixo do H1)*
 *
 * ❓ 4. DIAGNÓSTICO DO PROBLEMA E MATERIAIS / FERRAMENTAS:
 *    - Qual é o problema ou dúvida central que o leitor quer resolver? (ex.: umidade ascendente no rodapé, tinta descascando na fachada, parede esfarelando)
 *    - Quais materiais, ferramentas e EPIs serão necessários na bancada/obra? (ex.: espátula de aço, rolo de lã antigota, tela estruturante, fita veda trinca, óculos de proteção)
 *    - Há produtos ou insumos específicos cadastrados nos bancos de dados (`impermeabilizanteproducts.ts` ou `crosssellproducts.ts`) que devem ser linkados na lista de materiais?
 *
 * ❓ 5. QUANTIDADE E NOME DAS ETAPAS DO PASSO A PASSO:
 *    - Quantas etapas compõem o procedimento prático? (ex.: 3 a 5 passos claros)
 *    - Quais são os títulos de cada passo?
 *    - Você já tem as imagens ilustrativas de cada etapa salvas em `/public/images/blog/` em formato `.webp` (800x533)?
 *
 * ----------------------------------------------------------------------------
 * PARTE 1: OS SEGREDOS DOS 100 PONTOS NO PAGESPEED (OBRIGATÓRIO SEGUIR)
 * ----------------------------------------------------------------------------
 *
 * 1. ARQUIVO DA PÁGINA ASTRO (`src/pages/[slug-do-artigo].astro`):
 *    - Hidratação Inteligente: Use SEMPRE `client:idle` no componente React
 *      (`<NomeDoComponente client:idle />`) em vez de `client:load`.
 *      Isso entrega o HTML 100% renderizado instantaneamente e só carrega o JS
 *      interativo (FAQ) quando o navegador estiver livre (TBT = 0).
 *    - Exemplo exato do arquivo `.astro`:
 *      ```astro
 *      ---
 *      import BaseLayout from '../layouts/BaseLayout.astro';
 *      import { ComoImpermeabilizarParede } from '../components/impermeabilizantes/ComoImpermeabilizarParede';
 *
 *      const title = "Como Impermeabilizar Parede com Umidade em 4 Passos [Guia Prático]";
 *      const description = "Aprenda o passo a passo profissional para diagnosticar a umidade, preparar o reboco e aplicar o impermeabilizante definitivo sem errar.";
 *      const canonicalPath = "/como-impermeabilizar-parede-com-umidade/";
 *      const ogImage = "/images/blog/como-impermeabilizar-parede-com-umidade.webp";
 *      ---
 *      <BaseLayout title={title} description={description} canonicalPath={canonicalPath} ogType="article" ogImage={ogImage}>
 *        <ComoImpermeabilizarParede client:idle />
 *      </BaseLayout>
 *      ```
 *
 * 2. ÍCONES SVG INLINE (ZERO PESO EXTRA NO CLIENTE):
 *    - Declare SVGs enxutos diretamente no topo do arquivo `.tsx` (`Check`, `AlertTriangle`,
 *      `Wrench`, `Info`, `ChevronDown`, `ChevronUp`, `ShieldAlert`, `Lightbulb`, `Clock`).
 *    - Isso elimina pacotes pesados como react-icons e garante TBT = 0 ms.
 *
 * 3. OTIMIZAÇÃO DE LCP (IMAGEM DO HERO / TOPO):
 *    - A imagem de fundo do Hero é o elemento LCP (Largest Contentful Paint).
 *    - Ela DEVE conter:
 *      • `fetchPriority="high"` (com "P" maiúsculo no React/JSX)
 *      • Sem `loading="lazy"` (ou `loading="eager"`)
 *      • Dimensões explícitas `width={800} height={533}`
 *      • `srcSet` + `sizes` para telas móveis
 *      • `opacity-20 blur-sm` + gradiente escuro de `#173B46` a `#0F2931` garantindo contraste máximo (Acessibilidade 100).
 *
 * 4. IMAGENS DAS ETAPAS E MATERIAIS (CLS = 0):
 *    - Todas as imagens do corpo do tutorial DEVEM ter `loading="lazy"`.
 *    - Sempre declare `width={800} height={533}` explícitos para travar o layout contra saltos.
 *    - Miniaturas de materiais/produtos em caixas de ferramentas: `width={60} height={60}` em versão compacta (`-thumb.webp`).
 *    - Avatar do autor no topo com `width={32} height={32}`, `alt="" aria-hidden="true"`
 *      quando dentro de link com texto visível do autor (evita a falha `image-redundant-alt` do Axe/Lighthouse).
 *    - Arquivo de avatar salvo em tamanho reduzido (128x128 px, menos de 4 KiB).
 *    - Pipeline de imagens: converta sempre para `.webp` rodando `npm run optimize-images`.
 *
 * 5. PALETA OFICIAL DO UNIVERSO DA OBRA (WCAG AAA):
 *    - Azul Petróleo Primário: `#173B46` (Fundo do Hero, títulos H2/H3 e textos de alto contraste)
 *    - Azul Escuro Noturno: `#0F2931` (Gradientes escuros)
 *    - Laranja Queimado de Ação / Botões: `#E88735`
 *    - Laranja Hover: `#CF7122`
 *    - Bege Claro para Badges e Destaques: `#FDF3EA`
 *    - Regra de Contraste Absoluta:
 *      • Em fundos claros (`bg-white`, `bg-slate-50`, `bg-[#FDF3EA]`), NUNCA use laranja claro no texto.
 *      • SEMPRE use `text-[#173B46]` para badges, notas e números (taxa de contraste > 10.5:1, nível AAA).
 *      • Botões de ação `#E88735` usam sempre texto escuro `text-[#112228]`.
 *      • Jamais use amarelo (#FFD700).
 *    - Box de Alerta de Segurança: `bg-amber-50 border-l-4 border-amber-500 text-amber-950`
 *    - Box de Dica do Especialista: `bg-[#FDF3EA] border-l-4 border-[#E88735] text-slate-800`
 *
 * 6. REGRA ABSOLUTA DE FORMATAÇÃO DE TEXTO:
 *    - NUNCA coloque palavras, termos técnicos ou frases em negrito (<b> ou <strong>)
 *      no meio dos parágrafos de texto corrido. O texto deve ser 100% limpo, leve e natural de ler.
 *    - A cada ponto final (`.`), DEVE haver uma quebra de parágrafo (`<p>...</p>`).
 *    - Cada parágrafo deve ter entre 1 e 3 linhas no máximo.
 *
 * ----------------------------------------------------------------------------
 * PARTE 2: ANATOMIA COMPLETA DO ARTIGO TUTORIAL / INFORMATIVO
 * ----------------------------------------------------------------------------
 *
 * 1. HERO ESCURO (`bg-gradient-to-b from-[#173B46] to-[#0F2931]`):
 *    - Imagem de fundo com `opacity-20 blur-sm` e gradiente escuro.
 *    - Título `<h1>` centralizado: primeira linha em branco e gancho destacado em `<span className="text-[#E88735]">`.
 *    - Assinatura do autor: `"Por"` + link `/autores/[slug-do-autor]/` com avatar circular 32x32 (`alt="" aria-hidden="true"`).
 *    - Badge superior opcional de tempo estimado / nível de dificuldade.
 *
 * 2. INTRODUÇÃO DIDÁTICA:
 *    - Parágrafo lead com destaque visual (`border-l-4 border-[#E88735] pl-6 py-2`).
 *    - Imagem contextual ampla (`800x533 .webp`) mostrando o ambiente, problema ou preparação da superfície.
 *
 * 3. DIAGNÓSTICO DO PROBLEMA ("O QUE ACONTECE / CAUSAS"):
 *    - `<h2>` explicando em termos claros a raiz técnica da situação (ex.: capilaridade da alvenaria, falta de cura do reboco, movimentação estrutural).
 *
 * 4. MATERIAIS E FERRAMENTAS NECESSÁRIAS (CHECKLIST VISUAL):
 *    - `<h2>` detalhando o que separar antes de iniciar a aplicação (espátula, rolo, selador, impermeabilizante, etc.).
 *    - Checklist escaneável com ícones de `Check`.
 *    - Menção ou card sutil com link de afiliado para insumos e kits recomendados cadastrados em `src/data/crosssellproducts.ts`.
 *
 * 5. BANNER DO MEIO:
 *    - Componente `<BannerDoMeio />` centralizado no momento exato de transição para a prática.
 *
 * 6. PASSO A PASSO PRÁTICO NUMERADO (O CORAÇÃO DO ARTIGO):
 *    - `<h2>` do Passo a Passo.
 *    - Cada etapa é um `<section>` com `<h3>` contendo o badge numérico circular (`bg-[#173B46] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold`).
 *    - Explicação passo a passo em parágrafos curtos de 1 a 3 linhas.
 *    - Fotos ilustrativas intercaladas entre as etapas chave (`800x533 .webp` loading="lazy").
 *
 * 7. BOX DE ALERTA DE SEGURANÇA E EPIS:
 *    - Box com `bg-amber-50 border-l-4 border-amber-500` com ícone `ShieldAlert`, orientando o uso de luvas, óculos e proteção respiratória em produtos químicos.
 *
 * 8. ERROS COMUNS E COMO EVITÁ-LOS:
 *    - Grid duplo comparativo listando "O que NÃO fazer" (vermelho) e "Prática Recomendada" (verde), prevenindo retrabalho e desperdício de material.
 *
 * 9. DICAS DE MANUTENÇÃO PREVENTIVA E CONSERVAÇÃO:
 *    - Recomendações pós-aplicação e cuidados com tempo de cura para máxima durabilidade da barreira protetora.
 *
 * 10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL):
 *     - Dúvidas reais pesquisadas no Google sobre o tema respondidas de forma direta e escaneável.
 *
 * 11. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE):
 *     - Card escuro (`bg-[#173B46] text-white`) com borda superior `#E88735`, resumindo o veredito prático para o leitor.
 *
 * 12. BOX "DICA DO ESPECIALISTA":
 *     - Box bege claro (`bg-[#FDF3EA] border-l-4 border-[#E88735] text-slate-800`) com ícone de lâmpada, trazendo o segredo prático de obra.
 *
 * ----------------------------------------------------------------------------
 * PARTE 3: TEMPLATE DE PROMPT GENÉRICO (COPIE E PREENCHA PARA NOVOS TUTORIAIS)
 * ----------------------------------------------------------------------------
 *
 * Para solicitar à IA um novo artigo tutorial ou informativo no Universo da Obra, copie o modelo abaixo:
 *
 * ```markdown
 * Por favor, crie um novo artigo informativo/tutorial para o Universo da Obra seguindo rigorosamente o GuiaPadraoArtigoInformativo.tsx:
 * 1. Dados e Componentes:
 *    - Catálogo de artigos: `src/data/impermeabilizantearticles.ts` (ou o nicho correspondente)
 *    - Banco de produtos: `src/data/impermeabilizanteproducts.ts` / `src/data/crosssellproducts.ts`
 *    - Banner do Meio: `src/components/impermeabilizantes/BunnerDoMeioimpermeabilizante.tsx`
 *    - Exit Intent Popup: `src/components/impermeabilizantes/ExitIntentPopupimpermeabilizante.tsx`
 * 2. Tema e SEO:
 *    - Palavra-chave principal: [Palavra-Chave Principal]
 *    - Título H1: Como [Ação Prática] em [X] Passos: [Gancho Persuasivo]
 *    - Slug da Página Astro: /[slug-do-artigo]/
 * 3. Autor:
 *    - `rafael-oliveira` (Rafael Oliveira) ou `guilherme-martins` (Guilherme Martins)
 * 4. Diagnóstico e Materiais:
 *    - Problema abordado: [Descrição do problema ou dúvida técnica]
 *    - Materiais necessários: [Lista de ferramentas/insumos]
 * 5. Passo a Passo:
 *    - Etapas práticas: [Passo 1: ..., Passo 2: ..., Passo 3: ..., Passo 4: ...]
 * 6. Imagens:
 *    - Formato `.webp`, dimensões `800x533` em `/public/images/blog/`
 * ```
 * ============================================================================
 */

import React, { useState } from 'react';

// ============================================================================
// ATENÇÃO: NO ARTIGO REAL, IMPORTE OS COMPONENTES E DADOS DO SEU NICHO ESPECÍFICO!
// Exemplo para o nicho de Impermeabilizantes:
// import { BunnerDoMeioimpermeabilizante as BannerDoMeio } from './impermeabilizantes/BunnerDoMeioimpermeabilizante';
// import { ExitIntentPopupimpermeabilizante as ExitIntentPopup } from './impermeabilizantes/ExitIntentPopupimpermeabilizante';
// import { crossSellProducts } from '../data/crosssellproducts';
// ============================================================================

// Componentes e dados mockados para o template GuiaPadraoArtigoInformativo compilar com 0 erros:
const BannerDoMeio: React.FC = () => null;
const ExitIntentPopup: React.FC = () => null;
const crossSellProducts: Record<string, { name: string; link: string; image: string }> = {
  "kit-rolo-trincha": {
    name: "Kit Rolo de Lã Antigota + Trincha para Recortes",
    link: "https://meli.la/2tct6rK",
    image: "/images/produtos/Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha-thumb.webp"
  }
};

// Ícones SVG Inline Leves (Zero bloat de JS no bundle cliente e 100 pontos no PageSpeed)
const Check = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AlertTriangle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Wrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ChevronDown = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ShieldAlert = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const Lightbulb = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

const Clock = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

/**
 * COMPONENTE EXEMPLO OFICIAL — ARTIGO INFORMATIVO / HOW-TO
 * Serve como referência técnica visual e estrutural para qualquer tutorial do Universo da Obra.
 */
export const GuiaPadraoArtigoInformativo: React.FC = () => {
  // Estado do FAQ Expansível
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dados do FAQ Informativo (Perguntas reais de busca)
  const faqData = [
    {
      question: "Qual o momento ideal para fazer o reparo da umidade?",
      answer: [
        "O período de tempo seco e ensolarado é o mais indicado para garantir que as demãos curem com perfeição.",
        "Nunca aplique impermeabilizantes sobre paredes encharcadas ou durante dias chuvosos contínuos."
      ]
    },
    {
      question: "Posso aplicar o impermeabilizante direto sobre a tinta velha?",
      answer: [
        "Apenas se a tinta antiga estiver firme, íntegra e bem aderida.",
        "Se houver bolhas, esfarelamento ou mofo, você deve raspar até alcançar a alvenaria firme para garantir a aderência."
      ]
    },
    {
      question: "Quantas demãos são necessárias para formar uma barreira eficaz?",
      answer: [
        "A maioria dos fabricantes técnicos recomenda de duas a três demãos cruzadas.",
        "Respeite sempre o intervalo mínimo de cura entre demãos indicado na embalagem."
      ]
    }
  ];

  // Ferramenta sugerida vinculada ao banco de dados crosssellproducts.ts
  const acessorioSugerido = crossSellProducts["kit-rolo-trincha"];

  return (
    <div className="tw-article font-sans bg-white text-slate-800">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Assinatura do Autor)
          ===================================================================== */}
      <div className="relative bg-gradient-to-b from-[#173B46] to-[#0F2931] text-white py-20 md:py-32 overflow-hidden border-b-4 border-[#E88735]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/preparacao-e-aplicacao-impermeabilizante-parede.webp"
            alt="Profissional aplicando impermeabilizante técnico em parede de alvenaria"
            title="Como Impermeabilizar Parede com Umidade Passo a Passo"
            width={800}
            height={533}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#173B46]/85 to-[#0F2931]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge Informativo de Tempo Estimado / Dificuldade */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FDF3EA] text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15">
            <Clock size={14} className="text-[#E88735]" />
            <span>Tempo de Execução: 1 a 2 Dias • Nível: Prático</span>
          </div>

          {/* Único H1 da página: Título Principal + Gancho em #E88735 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            Como Impermeabilizar Parede com Umidade <br />
            <span className="text-[#E88735]">[Guia Prático Passo a Passo]</span>
          </h1>

          {/* Assinatura do Autor */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/autores/rafael-oliveira/"
                className="flex items-center gap-2.5 hover:text-[#E88735] transition-colors font-semibold group bg-white/5 pr-4 py-1 pl-1 rounded-full border border-white/10"
              >
                <img
                  src="/images/Autores/Rafael Oliveira.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#E88735] group-hover:scale-105 transition-transform object-cover"
                />
                <span>Rafael Oliveira</span>
              </a>
            </div>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="text-gray-400">Atualizado para 2026</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Centralizado de Leitura */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===================================================================
            2. INTRODUÇÃO DIDÁTICA (LEAD + FOTO DE ABERTURA)
            =================================================================== */}
        <section className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="lead text-xl md:text-2xl font-medium text-gray-900 border-l-4 border-[#E88735] pl-6 py-2">
            Ver a pintura descascar e manchas escuras de mofo tomarem conta da parede é um dos problemas mais comuns e incômodos em qualquer residência.
          </p>
          <p>
            Pintar por cima sem tratar a causa raiz do problema só gera gasto desnecessário, já que a umidade volta a estufar o acabamento em poucas semanas.
          </p>
          <p>
            Com o diagnóstico correto da origem da água e o preparo adequado da alvenaria, é possível criar uma barreira estanque e duradoura sem complicações.
          </p>
          <p>
            Neste tutorial prático, reunimos as etapas testadas em obra para recuperar paredes degradadas e blindar sua casa contra infiltrações futuras.
          </p>

          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/preparacao-e-aplicacao-impermeabilizante-parede.webp"
              alt="Profissional preparando superfície com produto impermeabilizante de alta performance"
              title="Preparo da parede para impermeabilização residencial"
              width={800}
              height={533}
              className="rounded-2xl shadow-md border border-gray-200 max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================================================================
            3. DIAGNÓSTICO DO PROBLEMA ("O QUE ACONTECE NA PAREDE")
            =================================================================== */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#173B46] mb-6 border-b-2 border-slate-100 pb-3">
            O Que Causa a Umidade e o Descascamento
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Tijolos, blocos de concreto e argamassas possuem poros microscópicos que se comportam como canudos naturais.
            </p>
            <p>
              Quando o solo ou a fachada externa entram em contato com a água, a pressão hidrostática ou a capilaridade forçam a umidade para o interior do reboco.
            </p>
            <p>
              Ao tentar evaporar pela face interna da parede, o vapor de água exerce pressão atrás da película de tinta.
            </p>
            <p>
              Essa tensão mecânica contínua rompe a aderência da massa corrida e gera o estufamento, as bolhas e a proliferação acelerada de fungos.
            </p>
          </div>
        </section>

        {/* ===================================================================
            4. MATERIAIS E FERRAMENTAS NECESSÁRIAS (CHECKLIST VISUAL)
            =================================================================== */}
        <section className="mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#173B46] text-white p-2.5 rounded-xl shrink-0">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#173B46] m-0">
                Materiais e Ferramentas Necessárias
              </h2>
              <p className="text-sm text-slate-600 m-0">
                Separe estes itens essenciais antes de iniciar o trabalho na sua obra ou reforma:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#173B46] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-slate-900 block text-sm">Espátula de Aço Rígida</span>
                <span className="text-xs text-slate-600">Para raspar partes soltas do reboco e tintas estufadas.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#173B46] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-slate-900 block text-sm">Rolo de Lã e Trincha para Recortes</span>
                <span className="text-xs text-slate-600">Para espalhar a membrana líquida uniformemente nos cantos.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#173B46] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-slate-900 block text-sm">Impermeabilizante Adequado</span>
                <span className="text-xs text-slate-600">Membrana acrílica elástica para fachadas ou argamassa polimérica para alicerces.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[#173B46] mt-0.5 shrink-0">
                <Check size={20} />
              </span>
              <div>
                <span className="font-bold text-slate-900 block text-sm">Lixa para Alvenaria (Grão 80 a 120)</span>
                <span className="text-xs text-slate-600">Para uniformizar a superfície e abrir porosidade para ancoragem.</span>
              </div>
            </div>
          </div>

          {/* Dica de Produto Vinculado do Banco de Dados (crosssellproducts.ts) */}
          {acessorioSugerido && (
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-600">
                <span className="font-bold text-[#173B46] block text-sm mb-1">
                  Acessório recomendado para aplicar na espessura correta:
                </span>
                Usar um rolo antigota de boa retenção evita respingos no piso e garante a espessura de película recomendada.
              </div>
              <a
                href={acessorioSugerido.link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="shrink-0 bg-[#E88735] hover:bg-[#CF7122] text-[#112228] hover:text-white text-xs font-bold py-2.5 px-4 rounded-lg uppercase tracking-wider transition-colors no-underline shadow-sm"
              >
                Ver Preço na Loja
              </a>
            </div>
          )}
        </section>

        {/* ===================================================================
            5. BANNER DO MEIO (TRANSIÇÃO PARA A PRÁTICA)
            =================================================================== */}
        <div className="my-12 flex justify-center">
          <BannerDoMeio />
        </div>

        {/* ===================================================================
            6. PASSO A PASSO PRÁTICO NUMERADO (O CORAÇÃO DO TUTORIAL)
            =================================================================== */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-[#173B46] mb-8 border-b-2 border-slate-100 pb-3">
            Passo a Passo para Impermeabilizar a Parede
          </h2>

          {/* ETAPA 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#173B46] flex items-center gap-3">
              <span className="bg-[#173B46] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-bold shrink-0">
                1
              </span>
              Raspagem e Remoção de Partes Soltas
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                O primeiro passo fundamental é remover completamente qualquer camada de tinta que já tenha perdido a aderência.
              </p>
              <p>
                Utilize a espátula de aço raspando com vigor em todas as áreas que apresentem bolhas, estufamento ou pó branco.
              </p>
              <p>
                Se o reboco estiver esfarelando, remova até encontrar uma base sólida de alvenaria.
              </p>
            </div>
          </section>

          {/* ETAPA 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#173B46] flex items-center gap-3">
              <span className="bg-[#173B46] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-bold shrink-0">
                2
              </span>
              Tratamento Antifúngico e Limpeza da Poeira
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Mofo e fungos continuam vivos e se alimentam da umidade interna se não forem neutralizados com solução adequada.
              </p>
              <p>
                Lave a região afetada com solução de água sanitária diluída em água na proporção de 1 para 1.
              </p>
              <p>
                Deixe agir por trinta minutos, enxágue com pano úmido e espere a superfície secar totalmente antes de prosseguir.
              </p>
              <p>
                Elimine qualquer resquício de poeira solta para não comprometer a ancoragem química do produto.
              </p>
            </div>

            <div className="w-full flex justify-center my-6">
              <img
                src="/images/blog/diferenca-impermeabilizante-selador-parede.webp"
                alt="Detalhe da preparação e limpeza de parede para impermeabilização"
                title="Superfície limpa e pronta para aplicação"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-slate-200 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* ETAPA 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#173B46] flex items-center gap-3">
              <span className="bg-[#173B46] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-bold shrink-0">
                3
              </span>
              Aplicação da Primeira Demão de Ancoragem
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Homogeneíze o produto impermeabilizante de acordo com as instruções exatas da ficha técnica do fabricante.
              </p>
              <p>
                Aplique a primeira demão com o rolo de lã em movimentos uniformes, garantindo que o produto penetre nos microporos do reboco.
              </p>
              <p>
                Utilize a trincha nos cantos, rodapés e encontros de paredes para não deixar nenhuma fresta sem cobertura.
              </p>
              <p>
                Em caso de trincas ativas, posicione uma fita telada de poliéster entre as demãos para estruturar a junta.
              </p>
            </div>
          </section>

          {/* ETAPA 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#173B46] flex items-center gap-3">
              <span className="bg-[#173B46] text-white w-8 h-8 rounded-full flex items-center justify-center text-base font-bold shrink-0">
                4
              </span>
              Demãos Cruzadas e Respeito ao Tempo de Cura
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Aguarde o intervalo de secagem recomendado (geralmente entre duas a quatro horas) antes da próxima etapa.
              </p>
              <p>
                Aplique a segunda demão em sentido cruzado em relação à primeira para fechar qualquer microfissura residual.
              </p>
              <p>
                Após a cura total (que costuma levar de vinte e quatro a setenta e duas horas), a parede estará blindada.
              </p>
              <p>
                A superfície final aceita acabamento com tinta acrílica decorativa de sua preferência com durabilidade garantida.
              </p>
            </div>
          </section>
        </div>

        {/* ===================================================================
            7. BOX DE ALERTA DE SEGURANÇA E EPIS
            =================================================================== */}
        <section className="mt-14 bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-r-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-1">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-950 mb-2">
                Alerta de Segurança e Proteção Individual
              </h3>
              <div className="space-y-3 text-sm text-amber-950">
                <p>
                  Sempre utilize óculos de proteção e luvas de borracha durante o manuseio de soluções alcalinas e impermeabilizantes químicos.
                </p>
                <p>
                  Mantenha portas e janelas abertas para circulação de ar durante a raspagem do reboco e a aplicação de resinas solventes.
                </p>
                <p>
                  Em caso de contato acidental com os olhos, lave com água corrente abundante e consulte um serviço médico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. ERROS COMUNS E COMO EVITÁ-LOS
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-[#173B46] mb-6 border-b-2 border-slate-100 pb-3">
            Erros Frequentes ao Impermeabilizar e Como Evitá-los
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-base">
                <AlertTriangle size={20} className="text-red-600" /> O que NÃO Fazer
              </h4>
              <ul className="space-y-2 text-red-800 text-sm list-disc list-inside">
                <li>Aplicar produto impermeabilizante sobre alvenaria úmida ou em dias de chuva.</li>
                <li>Pintar direto por cima do mofo sem lavar e neutralizar os esporos.</li>
                <li>Diluir o produto acima do limite máximo estabelecido pelo fabricante.</li>
                <li>Aplicar a segunda demão antes da secagem completa da primeira camada.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
              <h4 className="font-bold text-emerald-950 mb-3 flex items-center gap-2 text-base">
                <Check size={20} className="text-emerald-700" /> Prática Recomendada
              </h4>
              <ul className="space-y-2 text-emerald-900 text-sm list-disc list-inside">
                <li>Raspar toda a pintura degradada até encontrar uma base firme e sem pó.</li>
                <li>Aplicar sempre em demãos cruzadas para cobrir microfissuras da alvenaria.</li>
                <li>Utilizar tela estruturante de poliéster em cantos e rodapés sujeitos a movimentação.</li>
                <li>Aguardar o tempo de cura total antes de aplicar massas e pinturas decorativas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. DICAS DE MANUTENÇÃO PREVENTIVA
            =================================================================== */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-[#173B46] mb-6 border-b-2 border-slate-100 pb-3">
            Manutenção Preventiva para Nunca Mais Ter Problemas
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Inspecione periodicamente calhas, rufos e ralos externos para evitar que o acúmulo de água transborde sobre a alvenaria tratada.
            </p>
            <p>
              Em fachadas externas expostas a intempéries severas, planeje uma repintura técnica de proteção a cada quatro ou cinco anos.
            </p>
            <p>
              Mantenha o ambiente interno sempre arejado abrindo janelas nas primeiras horas da manhã para dispersar o vapor condensado.
            </p>
          </div>
        </section>

        {/* ===================================================================
            10. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#173B46] mb-8">
            Perguntas Frequentes sobre Impermeabilização de Paredes
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-800 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg text-[#173B46]">{faq.question}</span>
                    <span className="text-[#E88735] shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 space-y-3">
                      {faq.answer.map((p, pIndex) => (
                        <p key={pIndex} className="m-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            11. CONSIDERAÇÕES FINAIS (BOX ESCURO NOBRE)
            =================================================================== */}
        <section className="mt-16 pt-12 border-t-4 border-[#E88735]">
          <div className="bg-gradient-to-br from-[#173B46] to-[#0F2931] p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl text-white">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Sua Parede Protegida e Livre de Infiltrações
            </h2>

            <div className="prose prose-lg text-slate-200 max-w-none mx-auto space-y-4 text-sm sm:text-base">
              <p>
                Tratar a umidade com o método mecânico correto valoriza o imóvel e garante um ambiente saudável para toda a família.
              </p>
              <p>
                Seguindo o passo a passo com paciência e utilizando produtos certificados, a barreira protetora resiste por longos anos sem descascar.
              </p>
              <p>
                Invista sempre no preparo da base e escolha os insumos adequados para colher uma reforma definitiva e sem dores de cabeça.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            12. BOX "DICA DO ESPECIALISTA" (DESTAQUE FINAL)
            =================================================================== */}
        <div className="mt-12 bg-[#FDF3EA] border-l-4 border-[#E88735] p-6 sm:p-8 rounded-r-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-white p-3 rounded-full text-[#CF7122] border border-[#E88735]/30 shrink-0 hidden sm:block">
            <Lightbulb size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#173B46] mb-2">
              Dica Prática de Obra
            </h3>
            <div className="space-y-3 text-slate-800 text-sm leading-relaxed">
              <p>
                Para testar se a parede ainda tem umidade residual interna antes de impermeabilizar, cole com fita crepe um quadrado de plástico transparente de trinta por trinta centímetros na alvenaria.
              </p>
              <p>
                Se após vinte e quatro horas houver gotículas de água condensadas na face interna do plástico, o reboco ainda precisa de mais tempo de secagem antes de receber a membrana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup (mantido inativo no projeto até solicitação explícita) */}
      <ExitIntentPopup />
    </div>
  );
};
