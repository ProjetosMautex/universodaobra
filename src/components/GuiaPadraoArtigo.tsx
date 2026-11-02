/**
 * ============================================================================
 * GUIA MESTRE E PADRÃO DE CRIAÇÃO DE ARTIGOS (NOTA 100 NO PAGESPEED INSIGHTS)
 * Arquivo de Referência Universal — Independente de Tema ou Autor
 * ============================================================================
 *
 * OBJETIVO DESTE ARQUIVO:
 * Servir como documentação definitiva, molde de código (.tsx / .astro) e
 * template de prompt genérico para criar QUALQUER artigo de QUALQUER tema
 * mantendo 100 pontos no Google PageSpeed (Performance, Acessibilidade,
 * Práticas Recomendadas e SEO), alta retenção do leitor e máxima conversão.
 *
 * ----------------------------------------------------------------------------
 * PARTE 0: QUESTIONÁRIO PRÉ-ARTIGO (PERGUNTAS OBRIGATÓRIAS ANTES DE ESCREVER)
 * ----------------------------------------------------------------------------
 * Quando o usuário pedir: "olhe no GuiaPadraoArtigo.tsx e me faça as perguntas"
 * (ou quando for iniciar um novo artigo), o assistente/IA DEVE fazer exatamente
 * as seguintes perguntas no chat e aguardar as respostas:
 *
 * ❓ 1. NICHO E ARQUIVOS ESPECÍFICOS DE DADOS / COMPONENTES:
 *    - Qual é o nicho/categoria deste artigo? (ex.: Impermeabilizantes, Ferramentas, Tintas, etc.)
 *    - Qual arquivo de produtos deve ser usado para registrar as ofertas? (ex.: `src/data/impermeabilizanteproducts.ts`)
 *    - Qual arquivo de catálogo de artigos deve receber este artigo? (ex.: `src/data/impermeabilizantearticles.ts`)
 *    - Qual componente de Banner do Meio deve ser importado? (ex.: `src/components/impermeabilizantes/BunnerDoMeioimpermeabilizante.tsx`)
 *    - Qual componente de Exit Intent Popup deve ser importado? (ex.: `src/components/impermeabilizantes/ExitIntentPopupimpermeabilizante.tsx`)
 *    * (Importante: nunca crie arquivos genéricos fictícios; utilize sempre os componentes e dados dedicados ao nicho!)
 *
 * ❓ 2. PALAVRA-CHAVE PRINCIPAL, TÍTULO E URL (SLUG):
 *    - Qual a palavra-chave principal (foco de SEO)?
 *    - Qual o título H1 persuasivo do artigo?
 *    - Qual será a URL amigável / slug exato da página Astro? (ex.: `src/pages/[slug-do-artigo].astro` -> `/[slug-do-artigo]/`)
 *
 * ❓ 3. AUTOR DO ARTIGO:
 *    - Quem é o autor responsável pelo artigo?
 *      • `guilherme-martins` (Guilherme Martins — Engenheiro Civil e Especialista Técnico)
 *      • `rafael-oliveira` (Rafael Oliveira — Especialista em Obras, Reformas e Ferramentas)
 *      • Ou outro autor registrado em `src/data/authors.ts`?
 *    *(Isso define a assinatura "Por [Foto 32x32] [Nome]" com link para `/autores/[slug]/` logo abaixo do H1)*
 *
 * ❓ 4. PRODUTOS, IMAGENS E LINKS DE AFILIADO:
 *    - Quais modelos/produtos serão analisados e recomendados no artigo?
 *    - Você já tem as imagens (salvas em `/public/images/produtos/`) e links de afiliado cadastrados no arquivo de produtos do nicho, ou fornecerá novos links/imagens neste prompt?
 *
 * ❓ 5. BANNER DE CROSS-SELL E ELEMENTOS EXTRAS:
 *    - O artigo terá a seção de Banner de Cross-Sell (produtos complementares) logo após os produtos principais, ou devemos omitir esse bloco?
 *    - Os produtos de cross-sell são cadastrados centralizadamente no banco de dados `src/data/crosssellproducts.ts` contendo: `name`, `link` de afiliado e `image` otimizada em `.webp` (salva em `/public/images/produtos/`).
 *    - O banner suporta 2 a 3 cards (`grid md:grid-cols-2` ou `grid md:grid-cols-3`), cada um exibindo foto com `mix-blend-multiply`, tag de benefício (`#FDF3EA`), título, descrição curta e botão de ação `#E88735` ("VER PREÇO") com `target="_blank" rel="noopener noreferrer sponsored nofollow"`.
 *
 * ----------------------------------------------------------------------------
 * PARTE 1: OS SEGREDOS DOS 100 PONTOS NO PAGESPEED (OBRIGATÓRIO SEGUIR)
 * ----------------------------------------------------------------------------
 *
 * 1. ARQUIVO DA PÁGINA ASTRO (`src/pages/[slug-do-artigo].astro`):
 *    - Hidratação Inteligente: Use SEMPRE `client:idle` no componente React
 *      (`<NomeDoComponente client:idle />`) em vez de `client:load`.
 *      Isso entrega o HTML 100% renderizado instantaneamente e só carrega o JS
 *      interativo (Simulador e FAQ) quando o navegador estiver livre (TBT = 0).
 *    - Exemplo exato do arquivo `.astro`:
 *      ```astro
 *      ---
 *      import BaseLayout from '../layouts/BaseLayout.astro';
 *      import { NomeDoComponente } from '../components/impermeabilizantes/NomeDoComponente';
 *
 *      const title = "[Título SEO do Artigo com Palavra-Chave e Gancho]";
 *      const description = "[Resumo persuasivo de até 155 caracteres convidando ao clique]";
 *      const canonicalPath = "/[slug-do-artigo]/";
 *      const ogImage = "/images/blog/[slug-do-artigo].webp";
 *      ---
 *      <BaseLayout title={title} description={description} canonicalPath={canonicalPath} ogType="article" ogImage={ogImage}>
 *        <NomeDoComponente client:idle />
 *      </BaseLayout>
 *      ```
 *    - Wrapper Tailwind do Artigo: Sempre envolva o retorno JSX do componente
 *      em `<div className="tw-article">...</div>` para isolar o Tailwind CSS
 *      dos estilos institucionais globais do portal.
 *
 * 2. ÍCONES SVG INLINE (ZERO PESO EXTRA NO BUNDLE JS):
 *    - Evite importar bibliotecas inteiras de ícones no cliente quando possível.
 *    - Declare os SVGs leves diretamente no topo do `.tsx` (como demonstrado
 *      no código abaixo: `Check`, `X`, `ArrowRight`, `ChevronDown`, `ChevronUp`,
 *      `Sparkles`, `HelpCircle`, `ShoppingBag`). Isso mantém o pacote JS mínimo.
 *
 * 3. OTIMIZAÇÃO DE LCP (IMAGEM DO HERO / TOPO):
 *    - A imagem de fundo do Hero é o elemento LCP (Largest Contentful Paint).
 *    - Ela DEVE conter:
 *      • `fetchPriority="high"` (exatamente com "P" maiúsculo em JSX/TSX)
 *      • Sem `loading="lazy"` (ou com `loading="eager"`)
 *      • Dimensões explícitas `width={800} height={533}`
 *      • `srcSet` + `sizes` caso exista versão `-small.webp` para telas móveis
 *      • `opacity-20 blur-sm` + camada `bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]`
 *        garantindo leitura perfeita e nota máxima de contraste (Acessibilidade 100).
 *
 * 4. IMAGENS DO CORPO E VITRINE (CLS = 0 E CARREGAMENTO RÁPIDO):
 *    - Todas as imagens abaixo da dobra DEVEM ter `loading="lazy"`.
 *    - Sempre defina `width` e `height` explícitos para travar a proporção e
 *      impedir saltos de layout (CLS = 0):
 *      • Imagens de seções e produtos: `width={800} height={533}`
 *      • Miniaturas da vitrine/tabela: `width={60} height={60}`
 *      • Foto do autor no topo: `width={32} height={32}`
 *    - Em fotos de produtos com fundo branco, use `object-contain mix-blend-multiply`.
 *    - Exclusivamente formato `.webp` (nunca `.png` ou `.jpg` em produção).
 *
 * 5. HIERARQUIA SEMÂNTICA E ACESSIBILIDADE (100 PONTOS):
 *    - Apenas UM `<h1>` por página (dentro do Hero).
 *    - Respeite a ordem estrita de níveis: `<h1>` -> `<h2>` -> `<h3>` -> `<h4>`
 *      (jamais pule de `<h2>` direto para `<h4>`).
 *    - Contraste: Botões de ação (#E88735) (`bg-[#E88735]`) usam sempre texto escuro
 *      (`text-[#112228]` ou `text-slate-900`). Cores do portal seguem a paleta oficial:
 *      Azul Petróleo (`#173B46`), Laranja Queimado (`#E88735` / hover `#CF7122`),
 *      Bege Claro (`#FDF3EA`) e Escuro (`#0F2931`). Jamais use amarelo (#FFD700).
 *    - Links de afiliado sempre com `target="_blank" rel="noopener noreferrer sponsored nofollow"`.
 *
 * 6. TEXTO CORRIDO LIMPO (SEM NEGRITO NO MEIO DOS PARÁGRAFOS):
 *    - NÃO use frases, termos técnicos, nomes de produtos ou palavras em negrito
 *      (<strong> ou <b>) no meio do texto corrido dos parágrafos.
 *    - O texto corrido deve ser 100% limpo, leve e natural de ler, evitando poluição visual.
 *    - O negrito fica reservado exclusivamente aos elementos estruturais:
 *      títulos (h1, h2, h3, h4), cabeçalhos de tabelas (th), botões, badges e rótulos de Prós/Contras.
 *
 * ----------------------------------------------------------------------------
 * PARTE 2: ANATOMIA COMPLETA DO ARTIGO (DO TOPO AO FIM — QUALQUER TEMA)
 * ----------------------------------------------------------------------------
 *
 * 1. HERO (CABEÇALHO ESCURO):
 *    - Imagem principal ao fundo desfocada com gradiente escuro.
 *    - Título `<h1>` centralizado: primeira linha em branco e gancho principal
 *      destacado em `<span className="text-[#E88735]">`.
 *    - Logo abaixo do `<h1>`: assinatura genérica do autor contendo `"Por"` +
 *      link para `/autores/[slug-do-autor]/` com avatar circular pequeno (`32x32`
 *      com borda na cor secundária (#E88735)) + `[Nome do Autor]`.
 *
 * 2. INTRODUÇÃO CURTA (ABERTURA):
 *    - 2 a 5 parágrafos curtos (1 a 3 linhas cada, quebrando a cada ponto final)
 *      apresentando o problema real do leitor, o que está em jogo na decisão e
 *      o que ele vai descobrir no guia.
 *
 * 3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (INTERATIVO):
 *    - Card escuro (`from-slate-800 to-slate-900`) posicionado logo no início.
 *    - Faz uma pergunta direta adaptada ao tema do artigo (ex.: perfil de uso,
 *      objetivo principal, orçamento ou nível de exigência).
 *    - Oferece 2 ou mais botões/opções de 1 clique.
 *    - Ao selecionar, abre um box dinâmico com a recomendação exata e links
 *      âncora (`href="#[id-da-secao]"`) levando direto ao item ideal no texto.
 *
 * 4. VITRINE / TABELA RESUMO DE PRODUTOS (QUANDO HOUVER ITENS RECOMENDADOS):
 *    - Mistura visual de tabela comparativa com vitrine de conversão rápida.
 *    - Colunas: Foto (`60x60`), Modelo/Opção (exibindo categoria e nota logo
 *      abaixo do nome no celular para não quebrar a tela), Categoria (desktop),
 *      Nota (`X.X / 10`) e botão na cor secundária (#E88735) `"Ver Preço"`.
 *
 * 5. SEÇÕES DE CONTEÚDO E ANÁLISES DE PRODUTOS (`<h2>` e `<h3>`):
 *    - Seções informativas/contextuais (`<h2>` e `<h3>`): explicam conceitos,
 *      reputação, especificações, testes práticos e análises, inserindo imagens
 *      contextuais (`800x533`) onde houver espaços longos sem elementos visuais.
 *    - Blocos de Produtos / Alternativas (`<section id="[id]" className="scroll-mt-24">`):
 *      a) Título `<h2>` ou `<h3>` com borda lateral na cor secundária (`border-l-4 border-[#E88735] pl-4`).
 *         Regra: usar o nome exato do arquivo de imagem do produto (sem extensão).
 *      b) Imagem do produto (`800x533`) posicionada LOGO ABAIXO do título `H2`/`H3`.
 *      c) Texto descritivo analítico (1 frase por parágrafo, máx. 3 linhas).
 *      d) Ficha técnica enxuta em tabela (opcional, quando agregar valor).
 *      e) Componente `<AffiliateCard id="[id-do-produto]" />` centralizado.
 *      f) Grid duplo de **Prós / Principais Vantagens** (verde) e
 *         **Contras / Pontos de Melhoria** (vermelho).
 *      g) Tabela de Critérios Avaliados com Notas Individuais (opcional, ideal
 *         para artigos de ranking/comparativo profundo).
 *
 * 6. BANNERS DE MEIO DE ARTIGO (`<BunnerDoMeio />`):
 *    - Posicionados em pontos estratégicos de leitura (ex.: após o 3º item
 *      analisado e antes do FAQ). Se o componente estiver globalmente desativado
 *      no projeto retornando `null`, ele não afeta o layout nem o PageSpeed.
 *
 * 7. BANNER DE CROSS-SELL (PRODUTOS COMPLEMENTARES):
 *    - Posicionado LOGO DEPOIS que terminar a lista de produtos principais.
 *    - Cadastrado em `src/data/crosssellproducts.ts` com imagens WebP e links reais de afiliado.
 *    - Exibe de 2 a 3 itens complementares (`grid md:grid-cols-2` ou `grid md:grid-cols-3`) com
 *      foto em container (`mix-blend-multiply`), selo de categoria (`#FDF3EA`), título,
 *      descrição curta e botão "VER PREÇO" (`#E88735` text-[#112228] hover:bg-[#CF7122] hover:text-white).
 *    - Se não for aplicável ao artigo específico, basta omitir este bloco.
 *
 * 8. COMPARATIVOS DIRETOS, GUIA DE COMPRA E DICAS PRÁTICAS:
 *    - Subseções `<h2>` e `<h3>` com comparativos (`Opção A vs Opção B`),
 *      critérios técnicos de escolha, perfil ideal de usuário, quando buscar
 *      alternativas e lista de erros comuns a evitar.
 *    - Inclui linkagem interna natural para outros artigos relevantes do site.
 *    - Inclui o **Box de Destaque "Dica do Especialista / Dica Prática"**
 *      (`bg-[#FDF3EA] border-l-4 border-[#E88735]`).
 *
 * 9. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL):
 *    - Lista interativa de perguntas reais buscadas no Google sobre o tema.
 *    - Cada pergunta abre/fecha ao clicar, mantendo a página limpa e escaneável.
 *
 * 10. CONCLUSÃO DE ALTO IMPACTO:
 *     - Seção final escura (`bg-[#173B46] text-white`) com título em destaque na cor secundária (`#E88735`),
 *       resumindo o veredito final de forma direta para destravar a decisão.
 *
 * ============================================================================
 * PARTE 3: TEMPLATE DE PROMPT GENÉRICO (COPIE E PREENCHA PARA NOVOS ARTIGOS)
 * ============================================================================
 *
 * 1. Arquivos de Configuração (articles.ts e products.ts)
 * - articles.ts: Crie o card deste novo artigo em `src/data/articles.ts` com a
 *   URL: `/[slug-do-artigo]/`. No componente do artigo, a assinatura do autor
 *   logo abaixo do H1 deve linkar para `/autores/[slug-do-autor]/` com a foto e
 *   o nome correspondentes ao autor escolhido. Atualize o título e a descrição
 *   (excerpt) de acordo com o texto fornecido.
 * - Imagem Principal: Crie/prepare a imagem principal do artigo com fundo em
 *   gradiente escuro, representando o tema central do artigo e chamando atenção.
 *   Salve em `/images/blog/[pasta-ou-1]/[slug-do-artigo]` e referencie no
 *   `articles.ts` e no Hero. Não deixe nenhuma imagem quebrada.
 * - products.ts do nicho: Crie/verifique os IDs no arquivo de produtos do nicho (ex.: `src/data/impermeabilizanteproducts.ts`) para todos os modelos
 *   citados com oferta, adicione os links de afiliado correspondentes e
 *   referencie as imagens dos produtos. No artigo, a imagem de cada produto
 *   deve ficar posicionada logo abaixo do título H2 ou H3 dele.
 * - Imagens e Links dos Produtos: [Fornecer links/imagens ou instruir o uso da
 *   base de dados existente de acordo com os modelos citados no texto].
 * - Banner de Cross-Sell: Coloque o banner de produtos complementares (cross-sell)
 *   logo depois que acabar a lista de produtos principais.
 *   [Se não aplicável ao artigo específico, informar: "Não aplicável neste artigo,
 *   portanto omita o banner de cross-sell"].
 *
 * 2. Imagens e Otimização Automática
 * - Onde o roteiro pedir imagem ou houver caminhos indicados na estrutura,
 *   crie/puxe as imagens correspondentes.
 * - Onde houver trechos longos sem imagem no decorrer do artigo, insira/crie
 *   imagens contextuais alinhadas ao texto e ao título da seção. Todas as
 *   imagens devem ter atributos `alt` e `title` descritivos e otimizados para
 *   SEO para que o Google compreenda exatamente o conteúdo visual.
 * - Dimensões obrigatórias: `800 x 533` pixels (exceto ícones SVG, avatares e
 *   miniaturas 60x60 da vitrine).
 * - Pipeline de Imagens: Salve as imagens inicialmente em `.png` ou `.jpg`.
 *   Em seguida, rode OBRIGATORIAMENTE o comando `npm run optimize-images`.
 *   Confirme que os originais `.jpg`/`.png` foram apagados e que os arquivos
 *   `.astro` e `.tsx` puxam exclusivamente as versões `.webp`.
 *
 * 3. Estrutura, Performance (PageSpeed 100) e Estilo do Código (.astro e .tsx)
 * - Siga rigorosamente a arquitetura deste arquivo (`GuiaPadraoArtigo.tsx`) e
 *   de `MelhorParafusadeira.tsx` para garantir 100 pontos no PageSpeed:
 *   • Página `.astro` usando `<Componente client:idle />`.
 *   • Ícones SVG leves inline no topo do `.tsx`.
 *   • Imagem Hero com `fetchPriority="high"`, sem `loading="lazy"`, e todas as
 *     demais imagens abaixo da dobra com `loading="lazy"` e `width`/`height` fixos.
 * - Mantenha os pontos estratégicos de conversão (`<BunnerDoMeio />` após os
 *   primeiros itens/meio do artigo e antes do FAQ, além de `<ExitIntentPopup />`).
 *
 * 4. Regra Absoluta de Formatação de Texto
 * - A cada ponto final (`.`), DEVE haver uma quebra de parágrafo (`<p>...</p>`).
 * - Cada parágrafo deve ter no MÍNIMO 1 linha e no MÁXIMO 3 linhas, sem exceção.
 * - Títulos de Produtos: Para os subtítulos (`<h2>` ou `<h3>`) dos produtos,
 *   utilize o exato nome do arquivo de imagem fornecido, removendo a extensão
 *   (`.jpg`, `.png` ou `.webp`).
 *
 * ESTRUTURA PARA INSERÇÃO DO TEXTO E COMPONENTES (MOLDE GENÉRICO HTML):
 *
 * <h1>[Título Principal do Artigo com Palavra-Chave e Gancho]</h1>
 *
 * <!-- [ASSINATURA DO AUTOR LOGO ABAIXO DO TÍTULO: "Por [Foto 32x32] [Nome do Autor]" linkando para /autores/[slug-do-autor]/] -->
 *
 * <!-- INSERIR TEXTO DE INTRODUÇÃO AQUI (1 frase por parágrafo, 1 a 3 linhas) -->
 *
 * <!-- [INSERIR AQUI: SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA] -->
 * <!-- [Exemplo genérico contextualizado com o tema: "Qual é a sua necessidade principal? ( ) Opção/Perfil A ( ) Opção/Perfil B" exibindo resposta dinâmica com link âncora] -->
 *
 * <!-- [INSERIR AQUI: VITRINE MISTA COM TABELA RESUMO DOS PRODUTOS COM LINK NO ARTIGO (se houver produtos)] -->
 *
 * <h2>[Seção Contextual 1: O que é / Como funciona / Reputação ou Critério Base]</h2>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h2>[Especificações / Critérios Técnicos / Análise Detalhada]</h2>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h3>[Subtópico Técnico 1: Desempenho / Capacidade]</h3>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h3>[Subtópico Técnico 2: Construção / Usabilidade / Autonomia]</h3>
 * <!-- [CRIAR/PUXAR IMAGEM CONTEXTUAL 800x533: Título e Alt text focados em SEO descrevendo exatamente o conteúdo visual] -->
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h2>Pontos Fortes e Fracos: Análise Honesta (quando for review único)</h2>
 * <h3>✅ Principais Vantagens</h3>
 * <!-- INSERIR TEXTO OU LISTA DA SEÇÃO AQUI -->
 * <h3>❌ Pontos de Melhoria</h3>
 * <!-- INSERIR TEXTO OU LISTA DA SEÇÃO AQUI -->
 *
 * <h2>[Ranking dos Melhores Modelos / Opções e Alternativas Analisadas]</h2>
 * <!-- INSERIR TEXTO INTRODUTÓRIO DA LISTA AQUI -->
 *
 * <h3>[Nome Exato do Arquivo de Imagem do Produto 1 Sem Extensão]</h3>
 * <!-- [INSERIR IMAGEM DO PRODUTO 800x533 LOGO ABAIXO DO TÍTULO: Alt e Title focados em SEO] -->
 * <!-- INSERIR TEXTO DESCRITIVO DO PRODUTO (quebrando parágrafo a cada ponto final) -->
 * <!-- INSERIR FICHA TÉCNICA RÁPIDA (opcional) -->
 * <!-- INSERIR CARD DO PRODUTO E BOTÃO DE COMPRA COM AffiliateCard.tsx -->
 * <!-- INSERIR PRÓS E CONTRAS DO PRODUTO (+ Tabela de Notas por Critério opcional) -->
 *
 * <h3>[Nome Exato do Arquivo de Imagem do Produto 2 Sem Extensão]</h3>
 * <!-- [INSERIR IMAGEM DO PRODUTO 800x533 LOGO ABAIXO DO TÍTULO: Alt e Title focados em SEO] -->
 * <!-- INSERIR TEXTO DESCRITIVO DO PRODUTO -->
 * <!-- INSERIR CARD DO PRODUTO E BOTÃO DE COMPRA COM AffiliateCard.tsx -->
 * <!-- INSERIR PRÓS E CONTRAS DO PRODUTO -->
 *
 * <!-- [INSERIR BANNER DO MEIO (BunnerDoMeio.tsx) APÓS O TOP 3 PRODUTOS] -->
 *
 * <!-- [INSERIR AQUI: BANNER DE PRODUTOS CROSS-SELL LOGO APÓS TERMINAR OS PRODUTOS PRINCIPAIS (ou omitir se não aplicável)] -->
 *
 * <h2>[Comparativo com Principais Concorrentes / Como Escolher a Melhor Opção]</h2>
 * <!-- [CRIAR/PUXAR IMAGEM COMPARATIVA 800x533: Título e Alt text focados em SEO] -->
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI (incluindo linkagem interna natural para artigos relacionados) -->
 *
 * <h3>[Opção A vs Concorrente B (ou Critério de Escolha 1)]</h3>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h3>[Opção A vs Concorrente C (ou Critério de Escolha 2)]</h3>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h2>Para Quem Recomendamos?</h2>
 * <h3>Perfil Ideal de Usuário</h3>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 * <h3>Quando Buscar Alternativas</h3>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 *
 * <h2>Dicas de Uso para Máximo Aproveitamento</h2>
 * <!-- INSERIR TEXTO DA SEÇÃO AQUI -->
 * <h3>Dica Prática do Especialista</h3>
 * <!-- [BOX DE DESTAQUE COM DICA PRÁTICA (#FDF3EA e borda #E88735) + FOTO CIRCULAR DO AUTOR OPCIONAL] -->
 * <!-- LISTA DE ERROS COMUNS A EVITAR -->
 *
 * <!-- [INSERIR BANNER DO MEIO (BunnerDoMeio.tsx) ANTES DO FAQ] -->
 *
 * <h2>Perguntas Frequentes (FAQ)</h2>
 * <!-- INSERIR TEXTO INTRODUTÓRIO DO FAQ AQUI -->
 * <!-- FORMATAR AS PERGUNTAS ABAIXO COMO ACORDEÃO (FAQ EXPANSÍVEL) -->
 *
 * <h3>🔽 [Pergunta Frequente 1?]</h3>
 * <!-- INSERIR RESPOSTA AQUI (parágrafos curtos de 1 a 3 linhas) -->
 *
 * <h3>🔽 [Pergunta Frequente 2?]</h3>
 * <!-- INSERIR RESPOSTA AQUI -->
 *
 * <h3>🔽 [Pergunta Frequente 3?]</h3>
 * <!-- INSERIR RESPOSTA AQUI -->
 *
 * <h2>Conclusão: [Pergunta Central / Vale a Pena?]</h2>
 * <!-- INSERIR TEXTO DE CONCLUSÃO DIRETO EM CARD ESCURO DE FECHAMENTO -->
 * ============================================================================
 */

import React, { useState } from 'react';
import { AffiliateCard } from './AffiliateCard';

// ============================================================================
// ATENÇÃO: NO ARTIGO REAL, IMPORTE OS COMPONENTES E DADOS DO SEU NICHO ESPECÍFICO!
// Exemplo para o nicho de Impermeabilizantes:
// import { BunnerDoMeioimpermeabilizante as BunnerDoMeio } from './impermeabilizantes/BunnerDoMeioimpermeabilizante';
// import { ExitIntentPopupimpermeabilizante as ExitIntentPopup } from './impermeabilizantes/ExitIntentPopupimpermeabilizante';
// import { products } from '../data/impermeabilizanteproducts';
// import { crossSellProducts } from '../data/crosssellproducts';
// ============================================================================

// Componentes e dados mockados para o template GuiaPadraoArtigo compilar sem dependências externas:
const BunnerDoMeio: React.FC = () => null;
const ExitIntentPopup: React.FC = () => null;
const products: Record<string, { name: string; link: string; image: string }> = {};
const crossSellProducts: Record<string, { name: string; link: string; image: string }> = {};

// Ícones SVG Inline Leves (Garante Zero Bloat de JS e 100 no PageSpeed)
const Check = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const X = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const ArrowRight = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const ChevronDown = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
const ChevronUp = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);
const Sparkles = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
);
const HelpCircle = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const ShoppingBag = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

interface GenericShowcaseItem {
  id: string;
  anchorId: string;
  shortName: string;
  category: string;
  score: string;
  thumbSrc: string;
}

export const GuiaPadraoArtigo: React.FC = () => {
  // Estado do Simulador Rápido de Engajamento (Topo)
  const [quizProfile, setQuizProfile] = useState<'perfilA' | 'perfilB' | null>(null);

  // Estado do Acordeão de Perguntas Frequentes (FAQ)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Configuração Genérica da Vitrine / Tabela Resumo
  // Em artigos reais, os IDs devem existir em `src/data/products.ts`
  const showcaseItems: GenericShowcaseItem[] = [
    {
      id: "id-do-produto-1",
      anchorId: "item-1-destaque-principal",
      shortName: "Modelo / Opção 1 (Destaque Geral)",
      category: "Alta Performance / Uso Intenso",
      score: "9.8 / 10",
      thumbSrc: "/images/blog/1/nome-exato-da-imagem-produto-1-thumb.webp"
    },
    {
      id: "id-do-produto-2",
      anchorId: "item-2-custo-beneficio",
      shortName: "Modelo / Opção 2 (Melhor Custo-Benefício)",
      category: "Custo-Benefício / Dia a Dia",
      score: "9.4 / 10",
      thumbSrc: "/images/blog/1/nome-exato-da-imagem-produto-2-thumb.webp"
    }
  ];

  // Dados Genéricos do FAQ (Respeitando parágrafos curtos de 1 a 3 linhas)
  const faqData: { question: string; answer: React.ReactNode[] }[] = [
    {
      question: "Qual é a melhor opção para quem está começando agora?",
      answer: [
        "Para iniciantes ou uso ocasional, o ideal é priorizar equilíbrio entre facilidade de uso, segurança e custo acessível.",
        "Evite investir no modelo mais caro do mercado se você não vai utilizar recursos avançados toda semana.",
        <>
          Se quiser aprofundar nos conceitos básicos antes de decidir, confira também nosso <a href="/slug-artigo-relacionado/" className="text-blue-600 hover:underline font-medium">guia complementar sobre o tema</a>.
        </>
      ]
    },
    {
      question: "Como saber se o modelo escolhido realmente tem boa durabilidade?",
      answer: [
        "Verifique sempre a qualidade de construção dos componentes principais, a reputação da fabricante e a oferta de peças de reposição no Brasil.",
        "Outro termômetro indispensável é observar a garantia oficial e a facilidade de acesso à assistência técnica na sua região."
      ]
    },
    {
      question: "Vale a pena investir em um modelo mais avançado logo de cara?",
      answer: [
        "Vale a pena apenas quando a sua rotina exige uso frequente, carga pesada ou máxima produtividade sem pausas.",
        "Para demandas leves e pontuais, um modelo intermediário bem avaliado já entrega o resultado esperado com economia."
      ]
    }
  ];

  return (
    <div className="tw-article">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + Título H1 + Autor Genérico)
          ===================================================================== */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            fetchPriority="high"
            src="/images/blog/1/slug-do-artigo.webp"
            srcSet="/images/blog/1/slug-do-artigo-small.webp 490w, /images/blog/1/slug-do-artigo.webp 800w"
            sizes="(max-width: 768px) 490px, 800px"
            alt="Descrição visual clara do tema central do artigo para SEO"
            title="Título descritivo da imagem principal do artigo"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Único H1 da página: Parte principal em branco + Gancho na cor secundária (#E88735) */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Título Principal do Artigo com Palavra-Chave: <br />
            <span className="text-[#E88735]">Subtítulo ou Gancho de Destaque?</span>
          </h1>

          {/* Assinatura Genérica do Autor logo abaixo do Título */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/autores/guilherme-martins/"
                className="flex items-center gap-2 hover:text-[#E88735] transition-colors font-semibold group"
              >
                <img
                  src="/images/Autores/Guilherme Martins.webp"
                  alt="Nome do Autor Especialista"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#E88735] group-hover:scale-110 transition-transform object-cover"
                />
                Nome do Autor Especialista
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Container Central de Leitura Confortável */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ExitIntentPopup />

        {/* ===================================================================
            2. INTRODUÇÃO CURTA (Regra: 1 ponto final = 1 parágrafo de 1-3 linhas)
            =================================================================== */}
        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Acertar na escolha principal sobre este tema evita gastos desnecessários e garante que você tenha exatamente o desempenho esperado na prática.
          </p>
          <p>
            Com tantas alternativas parecidas no mercado, entender os diferenciais reais de construção, capacidade e custo-benefício é o primeiro passo antes de decidir.
          </p>
          <p>
            Neste guia completo, analisamos os detalhes técnicos essenciais, testamos os pontos fortes e fracos e mostramos qual opção realmente compensa para o seu perfil.
          </p>
        </div>

        {/* ===================================================================
            3. SIMULADOR RÁPIDO DE ENGAJAMENTO / ESCOLHA (1 Clique)
            =================================================================== */}
        <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#E88735] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold">Simulador Rápido: Qual opção é ideal para o seu caso?</h2>
          </div>
          <p className="text-slate-300 text-sm mb-4">
            Selecione abaixo a sua necessidade principal para ver a indicação direta:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizProfile('perfilA')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'perfilA'
                  ? 'bg-[#E88735] text-slate-900 border-[#E88735]'
                  : 'bg-slate-800 border-slate-600 hover:border-[#E88735]'
              }`}
            >
              <span>Uso Exigente / Rotina Intensa</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setQuizProfile('perfilB')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${
                quizProfile === 'perfilB'
                  ? 'bg-[#E88735] text-slate-900 border-[#E88735]'
                  : 'bg-slate-800 border-slate-600 hover:border-[#E88735]'
              }`}
            >
              <span>Uso Eventual / Economia Inteligente</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {quizProfile && (
            <div className="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-xl">
              {quizProfile === 'perfilA' ? (
                <p className="text-sm leading-relaxed">
                  🎯 Recomendação Direta: Foque na categoria de alta performance, especialmente no{' '}
                  <a href="#item-1-destaque-principal" className="text-[#E88735] underline font-bold">
                    Modelo / Opção 1
                  </a>
                  , que entrega robustez superior para rotinas prolongadas sem perda de eficiência.
                </p>
              ) : (
                <p className="text-sm leading-relaxed">
                  🎯 Recomendação Direta: O{' '}
                  <a href="#item-2-custo-beneficio" className="text-[#E88735] underline font-bold">
                    Modelo / Opção 2
                  </a>{' '}
                  é a escolha mais equilibrada, resolvendo demandas pontuais do dia a dia sem pesar no bolso.
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================================
            4. VITRINE MISTA COM TABELA RESUMO (Responsiva Mobile & Desktop)
            (Omitir apenas em artigos 100% informativos sem nenhum produto)
            =================================================================== */}
        <div className="mb-16 max-w-[850px] mx-auto bg-slate-50 p-2.5 rounded-2xl sm:p-5 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">
            Resumo Rápido: Melhores Opções Analisadas Neste Guia
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo / Opção</th>
                  <th className="p-3 text-left hidden md:table-cell">Perfil Indicado</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {showcaseItems.map((item) => {
                  const registeredProduct = products[item.id];
                  const displayName = registeredProduct?.name || item.shortName;
                  const affiliateUrl = registeredProduct?.link || '#';

                  return (
                    <tr key={item.id} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={item.thumbSrc}
                            alt={displayName}
                            title={displayName}
                            width={60}
                            height={60}
                            className="max-w-full max-h-full block object-contain mix-blend-multiply"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <a href={`#${item.anchorId}`} className="text-sm sm:text-base font-bold text-slate-800 hover:underline leading-tight block">
                          {item.shortName}
                        </a>
                        <div className="text-[11px] text-slate-500 mt-1 md:hidden">
                          {item.category}
                        </div>
                        <div className="text-[11px] font-bold text-[#CF7122] mt-0.5 sm:hidden">
                          Nota: {item.score}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-slate-600 text-xs sm:text-sm hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-[#FDF3EA] text-[#CF7122] text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {item.score}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a
                          href={affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="bg-[#E88735] text-[#1a1a1a] font-bold no-underline text-xs py-2 px-3 rounded whitespace-nowrap inline-block hover:opacity-90 transition-all sm:py-2.5 sm:px-5"
                        >
                          Ver Preço
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================================================================
            5. SEÇÕES CONTEXTUAIS / TÉCNICAS DO ARTIGO (H2 + H3 + Imagem SEO)
            =================================================================== */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            Contexto Geral: O Que Avaliar e Como Funciona na Prática?
          </h2>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Toda seção informativa deve responder de imediato à dúvida prometida no subtítulo sem rodeios.
            </p>
            <p>
              Respeite sempre a regra de ouro da escaneabilidade: quebre o parágrafo a cada ponto final e mantenha entre 1 e 3 linhas por bloco.
            </p>
          </div>

          {/* Imagem Contextual Otimizada (800x533 .webp) para preencher áreas longas */}
          <div className="w-full flex justify-center my-8">
            <img
              src="/images/blog/1/imagem-contextual-da-secao.webp"
              alt="Descrição detalhada e otimizada para SEO explicando o que aparece na imagem"
              title="Título otimizado para SEO da imagem contextual"
              width={800}
              height={533}
              className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">
            Subtópico Técnico ou Detalhe de Desempenho
          </h3>
          <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
            <p>
              Use subtítulos H3 para dividir especificações técnicas, etapas de teste prático, ergonomia ou usabilidade em blocos fáceis de digerir.
            </p>
            <p>
              Mantenha o texto limpo e fluido, sem frases ou palavras em negrito no meio dos parágrafos, deixando a hierarquia visual para títulos, tabelas e listas.
            </p>
          </div>
        </section>

        {/* ===================================================================
            6. ANÁLISE INDIVIDUAL DE PRODUTOS / MODELOS RECOMENDADOS
            =================================================================== */}
        <div className="space-y-16">
          <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#E88735] pb-2 mt-16 flex items-center gap-2">
            Análise Detalhada dos Modelos Selecionados
          </h2>

          {/* MOLDE DE PRODUTO 1 (Completo: Imagem abaixo do H3 + Texto + Ficha + AffiliateCard + Prós/Contras + Notas) */}
          <section id="item-1-destaque-principal" className="scroll-mt-24 pt-4">
            {/* REGRA: O título do produto usa o nome exato do arquivo de imagem (sem .webp/.png/.jpg) */}
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#E88735] pl-4">
              Nome Exato da Imagem do Produto 1 Sem Extensao
            </h3>

            {/* REGRA: Imagem do produto posicionada LOGO ABAIXO do título H2/H3 dele */}
            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/1/Nome Exato da Imagem do Produto 1 Sem Extensao.webp"
                srcSet="/images/blog/1/Nome Exato da Imagem do Produto 1 Sem Extensao-small.webp 400w, /images/blog/1/Nome Exato da Imagem do Produto 1 Sem Extensao.webp 800w"
                sizes="(max-width: 768px) 100vw, 400px"
                alt="Nome Exato da Imagem do Produto 1 com diferencial principal para SEO"
                title="Nome Exato da Imagem do Produto 1 Sem Extensao"
                width={800}
                height={533}
                className="max-h-80 object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                O primeiro parágrafo posiciona claramente para quem este modelo é a melhor escolha e qual problema principal ele resolve.
              </p>
              <p>
                No segundo parágrafo, destaque a capacidade real nos testes, construção e diferenciais práticos frente à média do mercado.
              </p>
              <p>
                No terceiro parágrafo, aponte de forma honesta qualquer limitação de perfil para gerar máxima confiança antes do clique.
              </p>
            </div>

            {/* Ficha Técnica Rápida (Opcional) */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700">Especificação Principal</th>
                    <td className="px-4 py-3 text-sm text-gray-600">Valor / Medida Real</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700">Capacidade / Rendimento</th>
                    <td className="px-4 py-3 text-sm text-gray-600">Detalhe objetivo de performance</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700">Diferencial Incluso</th>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      <Check className="text-green-600 inline" size={18} /> Sim (Itens que acompanham)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Card Principal de Afiliado (Puxa automaticamente de products.ts quando o ID existir lá) */}
            <AffiliateCard id="id-do-produto-1" />

            {/* Blocos Lado a Lado: Prós e Contras */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Check size={20} /> Prós
                </h4>
                <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                  <li>Vantagem prática número 1 comprovada no uso.</li>
                  <li>Excelente acabamento e resistência estrutural.</li>
                  <li>Ótimo pacote de recursos inclusos de fábrica.</li>
                  <li>Suporte pós-venda e reposição acessíveis.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <X size={20} /> Contras
                </h4>
                <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                  <li>Investimento inicial mais alto que modelos básicos.</li>
                  <li>Não indicado para cenários fora da sua proposta.</li>
                </ul>
              </div>
            </div>

            {/* Tabela de Notas por Critério (Padrão Autoridade Máxima / PageSpeed 100) */}
            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                    <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Desempenho na Função Principal</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">9.8 / 10</td>
                    <td className="px-4 py-3 text-slate-600">Entrega resultado consistente sem perda de ritmo sob demanda exigente.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Durabilidade</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">9.5 / 10</td>
                    <td className="px-4 py-3 text-slate-600">Materiais bem encaixados e conforto elevado mesmo após longo período de uso.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Custo-Benefício Geral</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">9.2 / 10</td>
                    <td className="px-4 py-3 text-slate-600">Valor compensado pela vida útil prolongada e menor necessidade de manutenção.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ponto Estratégico 1 do Banner de Meio (Ex.: após Top 3 produtos) */}
          <BunnerDoMeio />

          {/* MOLDE DE PRODUTO 2 (Versão Enxuta Ideal para Reviews ou Alternativas) */}
          <section id="item-2-custo-beneficio" className="scroll-mt-24 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#E88735] pl-4">
              Nome Exato da Imagem do Produto 2 Sem Extensao
            </h3>

            <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="/images/blog/1/Nome Exato da Imagem do Produto 2 Sem Extensao.webp"
                alt="Nome Exato da Imagem do Produto 2 focado em custo-benefício"
                title="Nome Exato da Imagem do Produto 2 Sem Extensao"
                width={800}
                height={533}
                className="max-h-80 object-contain mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>
                Esta segunda opção atende quem prioriza economia imediata e praticidade para resolver tarefas cotidianas sem complicação.
              </p>
              <p>
                Seu conjunto equilibra leveza, operação intuitiva e preço acessível, desde que respeitados os limites de uso moderado.
              </p>
            </div>

            <AffiliateCard id="id-do-produto-2" />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Check size={20} /> Prós
                </h4>
                <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                  <li>Preço de entrada altamente competitivo.</li>
                  <li>Manuseio simples e peso reduzido.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <X size={20} /> Contras
                </h4>
                <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                  <li>Capacidade limitada para uso pesado diário.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* ===================================================================
            7. BANNER DE PRODUTOS CROSS-SELL (LOGO APÓS OS PRODUTOS PRINCIPAIS)
            (Omitir este bloco inteiro caso Cross-Sell não se aplique ao artigo)
            Cadastrado centralizadamente em src/data/crosssellproducts.ts
            =================================================================== */}
        <div className="my-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-[#E88735] w-7 h-7 shrink-0" />
            <h3 className="text-2xl font-bold text-[#173B46]">
              Itens Complementares Recomendados para o Seu Kit
            </h3>
          </div>
          <p className="text-slate-600 mb-6 text-base">
            Para extrair o máximo desempenho e durabilidade da sua escolha principal, vale combinar com acessórios compatíveis de boa procedência:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card Cross-Sell 1 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#FDF3EA] text-[#CF7122] border border-[#E88735]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Mais Vendido
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
                  <img
                    src={crossSellProducts["id-cross-sell-1"]?.image || "/images/produtos/placeholder.webp"}
                    alt={crossSellProducts["id-cross-sell-1"]?.name || "Acessório Complementar 1"}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#173B46] mb-2">
                  Nome do Acessório ou Kit Complementar 1
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Breve descrição de 2 a 3 linhas explicando por que este complemento facilita o uso e evita retrabalho.
                </p>
              </div>
              <a
                href={crossSellProducts["id-cross-sell-1"]?.link || "#"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#E88735] text-[#112228] hover:bg-[#CF7122] hover:text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Card Cross-Sell 2 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#FDF3EA] text-[#CF7122] border border-[#E88735]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Custo-Benefício
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
                  <img
                    src={crossSellProducts["id-cross-sell-2"]?.image || "/images/produtos/placeholder.webp"}
                    alt={crossSellProducts["id-cross-sell-2"]?.name || "Acessório Complementar 2"}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#173B46] mb-2">
                  Nome do Acessório ou Kit Complementar 2
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Alternativa compacta e econômica para quem quer começar bem equipado gastando o mínimo possível.
                </p>
              </div>
              <a
                href={crossSellProducts["id-cross-sell-2"]?.link || "#"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#E88735] text-[#112228] hover:bg-[#CF7122] hover:text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Card Cross-Sell 3 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#FDF3EA] text-[#CF7122] border border-[#E88735]/30 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Recomendado
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
                  <img
                    src={crossSellProducts["id-cross-sell-3"]?.image || "/images/produtos/placeholder.webp"}
                    alt={crossSellProducts["id-cross-sell-3"]?.name || "Acessório Complementar 3"}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#173B46] mb-2">
                  Nome do Acessório ou Kit Complementar 3
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Item de reforço preventivo essencial para juntas, trincas ou acabamento refinado de longa vida útil.
                </p>
              </div>
              <a
                href={crossSellProducts["id-cross-sell-3"]?.link || "#"}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#E88735] text-[#112228] hover:bg-[#CF7122] hover:text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            8. COMPARATIVO COM CONCORRENTES / GUIA DE COMPRA E DICAS DO ESPECIALISTA
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Como Escolher a Opção Certa e Comparativo Direto
          </h2>

          <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
            <div className="space-y-4">
              <p>
                Olhar apenas o preço na etiqueta é o caminho mais comum para fazer uma compra frustrante.
              </p>
              <p>
                Compare sempre os critérios técnicos abaixo e veja como os principais concorrentes se comportam lado a lado.
              </p>
            </div>

            {/* Subseção de Comparativo ou Critério */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] m-0">
                Opção Principal vs Concorrente Direta: Qual Leva Vantagem?
              </h3>
              <p className="m-0">
                A concorrente direta costuma cobrar menos na entrada, mas entrega especificações mais enxutas em uso prolongado.
              </p>
              <p className="m-0">
                Já a opção principal justifica a diferença pela construção superior, maior estabilidade e melhor assistência nacional.
              </p>
            </div>

            {/* Avatar Circular do Autor (Reforço de E-E-A-T antes da Dica Prática) */}
            <div className="w-full flex justify-center my-6 not-prose">
              <a href="/autores/guilherme-martins/" aria-label="Perfil do autor do artigo">
                <img
                  src="/images/Autores/Guilherme Martins.webp"
                  alt="Nome do Autor Especialista"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#E88735] hover:scale-105 transition-transform duration-200 shadow-md"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Box de Destaque: Dica do Especialista / Dica Prática */}
            <div className="my-8 p-6 bg-[#FDF3EA] border-l-4 border-[#E88735] rounded-r-xl shadow-sm text-slate-800 not-prose">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-[#E88735] shrink-0" size={20} />
                <h3 className="text-lg font-bold text-[#173B46]">
                  Dica Prática do Especialista
                </h3>
              </div>
              <p className="text-base leading-relaxed font-medium text-slate-800">
                Antes de fechar a compra, confira a disponibilidade de peças de desgaste, compatibilidade elétrica da sua região e a reputação do pós-venda. Pequenos cuidados na escolha multiplicam a vida útil do seu investimento.
              </p>
            </div>

            {/* Lista Escaneável de Cuidados / Erros Comuns */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                Erros Comuns que Você Deve Evitar
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Escolher um modelo subdimensionado para a frequência real do seu trabalho.</li>
                <li>Ignorar a ergonomia e o peso em tarefas que duram várias horas.</li>
                <li>Descartar a importância de acessórios adequados para cada tipo de aplicação.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ponto Estratégico 2 do Banner de Meio (Antes do FAQ) */}
        <BunnerDoMeio />

        {/* ===================================================================
            9. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Clique sobre cada pergunta abaixo para expandir a resposta direta e tirar suas últimas dúvidas antes de decidir.
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E88735] text-slate-900 flex items-center justify-center font-bold text-xs shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-slate-600 shrink-0" />
                  ) : (
                    <ChevronDown className="text-slate-600 shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 pt-2 text-gray-600 border-t border-slate-100 space-y-3">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            10. CONCLUSÃO DE ALTO CONTRASTE (VEREDITO DIRETO)
            =================================================================== */}
        <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E88735] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E88735] opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold mb-6 text-[#E88735]">
              Conclusão: Qual Vale Mais a Pena?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fazer a compra certa significa ter resultado superior com menos esforço e zero arrependimento.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Não existe uma única resposta perfeita para todo mundo, mas sim a escolha alinhada à sua rotina real.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Se você exige desempenho intenso e durabilidade máxima, invista no modelo principal de categoria superior; se busca praticidade esporádica sem gastar além da conta, a opção custo-benefício cumpre o papel com folga.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};