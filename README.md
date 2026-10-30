# Universo da Obra — Portal de Construção e Reforma

Base completa do portal editorial **Universo da Obra**, desenvolvida com **Astro**, **Bun**, **React** e **TypeScript**, com foco em performance, acessibilidade, design responsivo e SEO técnico.

---

## 1. Tecnologias Utilizadas

- **Framework Principal:** [Astro](https://astro.build/) (renderização estática HTML por padrão)
- **Runtime e Gerenciador de Pacotes:** [Bun](https://bun.sh/)
- **Componentes Interativos (Ilhas):** [React](https://react.dev/) (`MobileMenu.tsx` e `CookieConsent.tsx`)
- **Linguagem:** TypeScript estrito
- **SEO e Sitemap:** `@astrojs/sitemap` + componente `SEO.astro`
- **Estilização:** CSS moderno semântico com variáveis CSS globais (`src/styles/global.css`) e estilos com escopo nos componentes Astro

---

## 2. Identidade Visual e Paleta de Cores

As cores estão centralizadas em `src/styles/global.css`:

- **Primária (Azul-petróleo):** `#173B46` — confiança, solidez e estabilidade
- **Secundária (Laranja de construção):** `#E88735` — chamadas para ação, botões e detalhes gráficos
- **Terciária (Areia clara):** `#F5F3EE` — fundos suaves de seções e áreas editoriais
- **Complementares:** Branco (`#FFFFFF`), Texto principal (`#263238`), Texto secundário (`#526068` / `#647078`), Bordas (`#E2E7E8`) e Fundo alternativo (`#F8FAFA`)

---

## 3. Estrutura do Projeto

```text
universo da obra/
├── public/
│   ├── images/
│   │   ├── articles/          # Ilustrações vetoriais locais para os cards demonstrativos
│   │   └── brand/             # Logotipo SVG horizontal e símbolo da marca
│   ├── favicon.svg            # Favicon vetorial coerente com o símbolo da marca
│   └── robots.txt             # Configuração inicial de rastreamento
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro  # Card reutilizável e tipado para artigos
│   │   ├── ArticleGrid.astro  # Grade responsiva de cards (1, 2 e 3 colunas)
│   │   ├── CookieConsent.tsx  # Aviso e painel de preferências de cookies (React)
│   │   ├── Footer.astro       # Rodapé responsivo com 3 áreas + faixa legal e ano automático
│   │   ├── Header.astro       # Cabeçalho desktop e integração do menu móvel
│   │   ├── Hero.astro         # Seção principal de destaque da página inicial
│   │   ├── MobileMenu.tsx     # Menu móvel acessível com botão MENU (React)
│   │   └── SEO.astro          # Metadados, canonical, Open Graph e Twitter Cards
│   ├── config/
│   │   └── site.ts            # Configuração centralizada (domínio, e-mail, links)
│   ├── content/
│   │   └── blog/              # Diretório preparado para artigos Markdown/MDX
│   ├── data/
│   │   └── articles.ts        # 6 registros demonstrativos de layout e categorias planejadas
│   ├── layouts/
│   │   └── BaseLayout.astro   # Layout base compartilhado por todas as páginas
│   ├── pages/
│   │   ├── blog/
│   │   │   └── index.astro    # Página inicial do blog com estado vazio e suporte a Content Collections
│   │   ├── contato.astro      # Página de contato com e-mail clicável (mailto:)
│   │   ├── index.astro        # Página inicial completa
│   │   ├── politica-de-privacidade.astro
│   │   ├── sobre.astro
│   │   └── termos-de-uso.astro
│   ├── styles/
│   │   └── global.css         # Tokens visuais, tipografia, acessibilidade e estilos globais
│   └── content.config.ts      # Configuração do Astro Content Collections
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Como Instalar, Executar e Compilar

Certifique-se de estar dentro da pasta `universo da obra`:

```bash
cd "universo da obra"
```

### Instalar dependências
```bash
bun install
```

### Iniciar servidor de desenvolvimento
```bash
bun dev
```
O servidor ficará disponível em `http://localhost:4321/`.

### Gerar build de produção
```bash
bun run build
```
Os arquivos estáticos otimizados e o sitemap serão gerados na pasta `dist/`.

### Visualizar o build de produção localmente
```bash
bun run preview
```

---

## 5. Como Atualizar Configurações e Publicar Conteúdos Futuros

1. **Domínio e Contato Oficial:**
   - Edite `src/config/site.ts` e `astro.config.mjs` caso deseje alterar o domínio provisório (`https://universodaobra.com`).
2. **Publicar Artigos Reais no Blog:**
   - Adicione arquivos `.md` ou `.mdx` em `src/content/blog/` seguindo o schema definido em `src/content.config.ts` (`title`, `description`, `category`, `pubDate`, `image`, `imageAlt`).
   - A página `/blog/` passará automaticamente do estado vazio para a grade de artigos publicados.
   - Na página inicial (`src/pages/index.astro`), basta substituir `DEMO_ARTICLES` pelos artigos reais da coleção quando desejar.
3. **Consentimento de Cookies e Ferramentas Opcionais:**
   - O componente `CookieConsent.tsx` salva a escolha versionada em `localStorage` (`universodaobra_cookie_consent`) e dispara o evento `universodaobra:consent-updated`. Caso futuramente deseje carregar scripts analíticos ou de marketing, escute esse evento e verifique se `analytics` ou `marketing` estão marcados como `true`.
