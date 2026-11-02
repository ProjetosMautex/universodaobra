import React, { useState } from 'react';
import { AffiliateCard } from '../AffiliateCard';
import { BunnerDoMeioimpermeabilizante as BunnerDoMeio } from './BunnerDoMeioimpermeabilizante';
import { ExitIntentPopupimpermeabilizante as ExitIntentPopup } from './ExitIntentPopupimpermeabilizante';
import { products, type ProductId } from '../../data/impermeabilizanteproducts';
import { crossSellProducts } from '../../data/crosssellproducts';

// Ícones SVG Inline Leves (Zero bloat de JS no bundle cliente e 100 pontos no PageSpeed)
const Check = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const X = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const ArrowRight = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const ChevronDown = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
const ChevronUp = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);
const Sparkles = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
);
const HelpCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const ShoppingBag = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

interface ShowcaseItem {
  id: ProductId;
  anchorId: string;
  shortName: string;
  category: string;
  score: string;
}

interface ProductReviewData {
  id: ProductId;
  anchorId: string;
  h3Title: string;
  paragraphs: React.ReactNode[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
}

export const MelhorImpermeabilizanteParaParedes: React.FC = () => {
  // Estado do Simulador Rápido de Escolha
  const [quizResult, setQuizResult] = useState<'fachada' | 'reboco' | 'pedra' | 'obra' | null>(null);

  // Estado do Acordeão FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const showcaseItems: ShowcaseItem[] = [
    {
      id: "Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas",
      anchorId: "vedapren-parede-18kg",
      shortName: "Vedacit Vedapren Parede 18 kg",
      category: "Pintura Impermeável 2 em 1 (Externa)",
      score: "9.8 / 10"
    },
    {
      id: "Fundo Preparado Superfícies Impermeável Sika Impermur 4 Em 1",
      anchorId: "sika-impermur-4-em-1",
      shortName: "Sika ImperMur 4 em 1 (3,6 L)",
      category: "Resina Seladora e Antimofo",
      score: "9.6 / 10"
    },
    {
      id: "Resina Acrílica Bautech 3,6L Brilhante Incolor Multiuso Alta Cobertura",
      anchorId: "resina-acrilica-bautech",
      shortName: "Resina Acrílica Bautech 3,6 L",
      category: "Resina Brilhante Multiuso",
      score: "9.3 / 10"
    },
    {
      id: "Massa Pronta Reboco Impermeável Quartzolit 20kg Cinza",
      anchorId: "reboco-impermeavel-quartzolit",
      shortName: "Reboco Impermeável Quartzolit 20 kg",
      category: "Argamassa Pronta 3 em 1",
      score: "9.5 / 10"
    },
    {
      id: "Dryko - Vedatudo Impermeável Milagroso 300g Acabamento Brilhante Cor Incolor",
      anchorId: "dryko-vedatudo-300g",
      shortName: "Dryko VedaTudo Milagroso 300 g",
      category: "Selante Incolor para Fissuras",
      score: "9.1 / 10"
    },
    {
      id: "Sika-1 Aditivo Impermeabilizante Cimento Concreto 1l - 2 Un",
      anchorId: "aditivo-sika-1-1l",
      shortName: "Aditivo Sika 1 Bisnaga 1 L",
      category: "Aditivo Impermeabilizante (Reboco)",
      score: "9.6 / 10"
    },
    {
      id: "Impermeabilizante Bellinzoni Aquarium 900ml Mármore Granito",
      anchorId: "bellinzoni-aquarium-900ml",
      shortName: "Bellinzoni Aquarium 900 ml",
      category: "Hidrofugante e Oleofugante (Pedras)",
      score: "9.5 / 10"
    },
    {
      id: "Acquella Vedacit Tijolo Pedra Telha Incolor",
      anchorId: "acquella-vedacit-incolor",
      shortName: "Acquella Vedacit 18 L Incolor",
      category: "Hidrofugante Fosco (Fachadas)",
      score: "9.4 / 10"
    },
    {
      id: "Vedapren Parede Impermeável 3,6kg Branco Vedacit",
      anchorId: "vedapren-parede-3-6kg",
      shortName: "Vedapren Parede 3,6 kg Branco",
      category: "Tinta Acrílica Elástica (Pequenas Áreas)",
      score: "9.5 / 10"
    },
    {
      id: "Impermeabilizante Votomassa Imperplus 18l Concreto Balde",
      anchorId: "votomassa-imperplus-18l",
      shortName: "Votomassa Imperplus Balde 18 L",
      category: "Aditivo Plastificante para Massa",
      score: "9.4 / 10"
    },
    {
      id: "Resina Impermeabilizante Coral 3,6L Incolor Proteção Sol & Chuva Telhas Pedras",
      anchorId: "coral-sol-e-chuva-resina",
      shortName: "Coral Sol & Chuva Resina 3,6 L",
      category: "Resina Acrílica Brilhante Externa",
      score: "9.3 / 10"
    },
    {
      id: "Impermeabilizante Asfaltico 3,6l Vonder",
      anchorId: "impermeabilizante-asfaltico-vonder",
      shortName: "Impermeabilizante Asfáltico Vonder 3,6 L",
      category: "Manta Asfáltica Fria (Baldrames)",
      score: "9.2 / 10"
    }
  ];

  const productReviews: ProductReviewData[] = [
    {
      id: "Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas",
      anchorId: "vedapren-parede-18kg",
      h3Title: "Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas",
      paragraphs: [
        <>A tinta impermeabilizante Vedapren Parede da Vedacit permite impermeabilizar e pintar a alvenaria externa em uma única etapa, dispensando tinta de acabamento.</>,
        <>Sua fórmula acrílica elástica possui ação antimofo e bactericida, acompanhando pequenas fissuras térmicas enquanto entrega acabamento branco fosco lavável.</>,
        <>Pronta para uso (sem necessidade de diluição), a embalagem de 18 kg rende até 150 m².</>,
        <>O fabricante recomenda aplicar de duas a três demãos sobre o substrato limpo, respeitando 4 horas entre camadas e 5 dias para a cura total.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Tinta acrílica elástica (base água)" },
        { label: "Rendimento", value: "Até 150 m² (embalagem de 18 kg)" },
        { label: "Intervalo e Cura", value: "4 h entre demãos / 5 dias para cura total" }
      ],
      pros: [
        "Ação 2 em 1: impermeabiliza e pinta com acabamento fosco lavável.",
        "Película elástica que acompanha microfissuras de retração.",
        "Aceita pigmentação e possui proteção antimofo e bactericida.",
        "Alto rendimento de até 150 m² na embalagem de 18 kg."
      ],
      cons: [
        "Exige superfície rigorosamente limpa e firme para ancoragem.",
        "Tempo de cura total longo (5 dias)."
      ]
    },
    {
      id: "Fundo Preparado Superfícies Impermeável Sika Impermur 4 Em 1",
      anchorId: "sika-impermur-4-em-1",
      h3Title: "Fundo Preparado Superfícies Impermeável Sika Impermur 4 Em 1",
      paragraphs: [
        <>Paredes com reboco fraco (esfarelando) e manchas constantes de bolor pedem estabilização da base antes da pintura.</>,
        <>O Sika ImperMur atua como uma resina multifuncional 4 em 1: sela os poros, impermeabiliza contra a umidade da alvenaria, endurece superfícies arenosas e inibe a proliferação de fungos.</>,
        <>De base aquosa e baixa viscosidade, penetra profundamente no substrato e forma uma barreira transparente que evita bolhas na tinta futura.</>,
        <>Na hora de dimensionar a compra, considere que o galão de 3,6 L tem rendimento limitado a até 18 m².</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Resina seladora e endurecedora (base aquosa)" },
        { label: "Rendimento", value: "Até 18 m² (galão de 3,6 L)" },
        { label: "Acabamento", value: "Transparente / Incolor após secagem" }
      ],
      pros: [
        "Fórmula 4 em 1 (sela, impermeabiliza, endurece o reboco e combate o mofo).",
        "Alto poder de penetração que consolida partículas soltas.",
        "Acabamento incolor após a secagem.",
        "Resistente à ação dos raios UV."
      ],
      cons: [
        "Rendimento reduzido por embalagem (até 18 m²).",
        "Consumo por m² sobe em rebocos muito porosos."
      ]
    },
    {
      id: "Resina Acrílica Bautech 3,6L Brilhante Incolor Multiuso Alta Cobertura",
      anchorId: "resina-acrilica-bautech",
      h3Title: "Resina Acrílica Bautech 3,6L Brilhante Incolor Multiuso Alta Cobertura",
      paragraphs: [
        <>Indicada para proteger e realçar paredes de alvenaria, tijolos aparentes, pedras naturais, cimento queimado e telhas, a Resina Acrílica Bautech cria uma película impermeável de acabamento brilhante.</>,
        <>Sua composição à base de água evita a absorção de chuva e reduz a impregnação de sujeira, facilitando a manutenção.</>,
        <>Segundo a ficha técnica, o galão de 3,6 L rende até 35 m² considerando a aplicação de duas demãos com pincel, rolo de lã ou pulverizador de baixa pressão.</>,
        <>Por formar um filme rígido, não é indicada para paredes com trincas ativas.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Resina acrílica impermeável (base água)" },
        { label: "Rendimento", value: "Até 35 m² em 2 demãos (galão de 3,6 L)" },
        { label: "Secagem Completa", value: "12 horas (acabamento incolor brilhante)" }
      ],
      pros: [
        "Acabamento brilhante incolor que valoriza a textura original.",
        "Versátil para tijolos, pedras, cimento queimado e telhas.",
        "Base aquosa aplicável com rolo, pincel ou pulverizador.",
        "Rende até 35 m² e facilita a limpeza superficial."
      ],
      cons: [
        "Filme rígido sem elasticidade para acompanhar fissuras.",
        "Secagem completa exige aguardar 12 horas."
      ]
    },
    {
      id: "Massa Pronta Reboco Impermeável Quartzolit 20kg Cinza",
      anchorId: "reboco-impermeavel-quartzolit",
      h3Title: "Massa Pronta Reboco Impermeável Quartzolit 20kg Cinza",
      paragraphs: [
        <>Quando o reboco antigo já está comprometido pela infiltração, apenas pintar por cima não resolve o problema na base.</>,
        <>O Reboco Impermeável Quartzolit é uma argamassa pronta 3 em 1 que funciona como chapisco, reboco e barreira impermeável em paredes internas e externas.</>,
        <>Basta misturar água ao pó para aplicar o revestimento, que após seco resiste à hidropressão e contrapressão da água com acabamento fino.</>,
        <>Por ser um produto cimentício, requer ferramentas de pedreiro para nivelamento e possui tempo de cura de 7 a 28 dias.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Argamassa cimentícia impermeável 3 em 1" },
        { label: "Embalagem", value: "Saco de 20 kg (basta adicionar água)" },
        { label: "Tempo de Cura", value: "7 a 28 dias (suporta pressão positiva e negativa)" }
      ],
      pros: [
        "Solução 3 em 1: dispensa chapisco e já entrega reboco impermeável.",
        "Suporta pressão positiva e negativa (contrapressão) da água.",
        "Acabamento fino e pronto para uso (basta adicionar água).",
        "Elimina erros de dosagem manual de aditivos na obra."
      ],
      cons: [
        "Exige mão de obra habituada ao desempeno de argamassa.",
        "Cura completa pode levar de 7 a 28 dias."
      ]
    },
    {
      id: "Dryko - Vedatudo Impermeável Milagroso 300g Acabamento Brilhante Cor Incolor",
      anchorId: "dryko-vedatudo-300g",
      h3Title: "Dryko - Vedatudo Impermeável Milagroso 300g Acabamento Brilhante Cor Incolor",
      paragraphs: [
        <>Projetado para intervenções pontuais, o Dryko VedaTudo é um selante impermeabilizante indicado para vedar fissuras, microfissuras, peitoris, frestas de janelas e cantos de box.</>,
        <>Sua fórmula monocomponente à base de resina acrílica pura e copolímeros é pronta para uso e forma uma membrana elástica incolor resistente às intempéries e aos raios UV.</>,
        <>A cura total ocorre em 24 horas sem deixar odor forte.</>,
        <>Vale observar que o pote de 300 g possui rendimento restrito a pequenos reparos localizados, não sendo viável para cobrir paredes inteiras.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Selante acrílico elástico monocomponente" },
        { label: "Embalagem", value: "Pote de 300 g (reparos localizados)" },
        { label: "Cura Total", value: "24 horas (incolor brilhante com filtro UV)" }
      ],
      pros: [
        "Pronto para uso e fácil de espalhar em frestas e trincas.",
        "Acabamento transparente que não altera a estética do local.",
        "Resistente aos raios ultravioleta (UV) e à chuva.",
        "Cura total rápida em 24 horas."
      ],
      cons: [
        "Embalagem pequena (300 g) com rendimento limitado.",
        "Exclusivo para reparos focais."
      ]
    },
    {
      id: "Sika-1 Aditivo Impermeabilizante Cimento Concreto 1l - 2 Un",
      anchorId: "aditivo-sika-1-1l",
      h3Title: "Sika-1 Aditivo Impermeabilizante Cimento Concreto 1l - 2 Un",
      paragraphs: [
        <>O Sika 1 na embalagem de 1 litro é a opção prática para quem vai preparar argamassas impermeáveis em pequenos reparos ou reformas de paredes externas, banheiros, cozinhas e baldrames.</>,
        <>Misturado diretamente à água de amassamento, ele reage com o cimento e bloqueia os vasos capilares do reboco com efeito permanente, sem alterar o tempo de pega da massa.</>,
        <>O consumo varia de 0,5 a 2 litros para cada saco de cimento de 50 kg.</>,
        <>Conforme a ficha técnica da Sika, não deve ser usado em concreto armado ou protendido.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Aditivo líquido impermeabilizante mineral" },
        { label: "Consumo Médio", value: "0,5 L a 2 L por saco de cimento (50 kg)" },
        { label: "Restrição Técnica", value: "Não utilizar em concreto armado ou protendido" }
      ],
      pros: [
        "Bloqueia a umidade por capilaridade dentro da argamassa.",
        "Não altera o tempo de cura e trabalho do cimento.",
        "Embalagem de 1 L econômica para reparos localizados.",
        "Eficiente em áreas úmidas internas, externas e alicerces."
      ],
      cons: [
        "Uso contraindicado em concreto armado ou protendido.",
        "Exige medição e diluição corretas na água da massa."
      ]
    },
    {
      id: "Impermeabilizante Bellinzoni Aquarium 900ml Mármore Granito",
      anchorId: "bellinzoni-aquarium-900ml",
      h3Title: "Impermeabilizante Bellinzoni Aquarium 900ml Mármore Granito",
      paragraphs: [
        <>Desenvolvido para revestimentos minerais como mármores, granitos, porcelanatos, cerâmicas e pedras naturais, o Bellinzoni Aquarium atua como hidrofugante e oleofugante líquido.</>,
        <>Ele penetra nos poros do material para impedir a absorção tanto de água quanto de óleos e gorduras, evitando manchas profundas sem formar película plastificada e sem alterar a cor da rocha.</>,
        <>Livre de silicone e com filtro UV, pode ser aplicado com rolo ou pincel em ambientes internos e externos.</>,
        <>Em pedras brutas, rende cerca de 12 m² por litro considerando duas demãos espaçadas em 2 horas.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Hidrofugante e oleofugante sem silicone" },
        { label: "Rendimento Médio", value: "Cerca de 12 m²/L em pedras brutas (2 demãos)" },
        { label: "Intervalo entre Demãos", value: "2 horas (proteção UV interna e externa)" }
      ],
      pros: [
        "Dupla ação: repele água e substâncias oleosas/gordurosas.",
        "Transparente, preserva a cor e a textura natural da pedra.",
        "Conta com proteção UV para fachadas externas.",
        "Aplicação prática com rolo, pincel ou rodo."
      ],
      cons: [
        "O rendimento oscila bastante conforme a porosidade da pedra.",
        "Exige respeitar o intervalo de 2 horas entre as demãos."
      ]
    },
    {
      id: "Acquella Vedacit Tijolo Pedra Telha Incolor",
      anchorId: "acquella-vedacit-incolor",
      h3Title: "Acquella Vedacit Tijolo Pedra Telha Incolor",
      paragraphs: [
        <>O Acquella Vedacit de 18 litros é um hidrofugante incolor à base de água projetado para proteger fachadas de tijolos aparentes, concreto à vista, pedras naturais e telhas cerâmicas.</>,
        <>Ele age por impregnação nos poros sem formar filme brilhante, mantendo o aspecto natural do revestimento enquanto impede infiltrações de chuva, manchas e limo.</>,
        <>Pronto para uso e de rápida absorção, o galão de 18 L rende até 36 m².</>,
        <>A fabricante indica aplicar duas demãos, observando o intervalo de até 6 horas entre elas.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Hidrofugante incolor fosco (base água)" },
        { label: "Rendimento", value: "Até 36 m² na embalagem de 18 L" },
        { label: "Aplicação", value: "2 demãos com intervalo de até 6 horas" }
      ],
      pros: [
        "Incolor e fosco, mantém a estética original da superfície.",
        "Fórmula base água pronta para uso e com baixo odor.",
        "Impede a absorção de chuva em fachadas e telhados porosos.",
        "Galão de 18 L dimensionado para áreas extensas."
      ],
      cons: [
        "Rendimento limitado a até 36 m² por embalagem de 18 L.",
        "Requer atenção ao intervalo correto entre as duas demãos."
      ]
    },
    {
      id: "Vedapren Parede Impermeável 3,6kg Branco Vedacit",
      anchorId: "vedapren-parede-3-6kg",
      h3Title: "Vedapren Parede Impermeável 3,6kg Branco Vedacit",
      paragraphs: [
        <>Voltada para paredes internas, fachadas, concreto, reboco e fibrocimento, a tinta acrílica impermeável Vedapren Parede 3,6 kg forma uma película elástica à base de copolímeros acrílicos que barra a infiltração de água e previne fissuras provocadas por variações de temperatura.</>,
        <>Por já vir pronta para uso, agiliza a pintura de proteção e aceita cobertura posterior com tinta acrílica convencional.</>,
        <>Nas especificações de uso, recomenda-se aplicar de 2 a 3 demãos com intervalo de 4 horas entre elas, aguardando de 72 horas a 5 dias para a cura completa.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Pintura acrílica impermeável elástica" },
        { label: "Embalagem", value: "Galão de 3,6 kg (pronto para uso)" },
        { label: "Cura Completa", value: "72 horas a 5 dias (2 a 3 demãos)" }
      ],
      pros: [
        "Ação 6 em 1 que sela, impermeabiliza e dá acabamento.",
        "Membrana elástica que acompanha microfissuras térmicas.",
        "Pronta para uso e compatível com concreto, reboco e fibrocimento.",
        "Permite aplicação de tinta de acabamento por cima."
      ],
      cons: [
        "Demanda de 2 a 3 demãos com intervalos de 4 horas.",
        "Exige aguardar o ciclo completo de cura para máxima proteção."
      ]
    },
    {
      id: "Impermeabilizante Votomassa Imperplus 18l Concreto Balde",
      anchorId: "votomassa-imperplus-18l",
      h3Title: "Impermeabilizante Votomassa Imperplus 18l Concreto Balde",
      paragraphs: [
        <>Indicado para a fase de construção ou reforma bruta, o aditivo líquido Imperplus de 18 L é misturado diretamente à água de preparo de argamassas e concretos.</>,
        <>Sua ação química fecha os poros capilares da massa, criando uma barreira definitiva contra a umidade ascendente e infiltrações.</>,
        <>Além de impermeabilizar, atua como plastificante, deixando a argamassa mais macia, fácil de espalhar e com melhor acabamento.</>,
        <>Cada balde de 18 litros tem rendimento suficiente para aditivar a mistura de até 9 sacos de cimento de 50 kg.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Aditivo líquido impermeabilizante e plastificante" },
        { label: "Rendimento", value: "Aditiva até 9 sacos de cimento de 50 kg (balde 18 L)" },
        { label: "Indicação", value: "Argamassas de revestimento, assentamento e concretos" }
      ],
      pros: [
        "Bloqueia a umidade por capilaridade desde a estrutura do reboco.",
        "Deixa a massa mais macia e melhora a trabalhabilidade.",
        "Alto rendimento: 18 L atendem até 9 sacos de cimento.",
        "Ação permanente que não desgasta na superfície."
      ],
      cons: [
        "Exige dosagem exata para não alterar a resistência da massa.",
        "Restrito ao preparo de argamassas e concretos novos."
      ]
    },
    {
      id: "Resina Impermeabilizante Coral 3,6L Incolor Proteção Sol & Chuva Telhas Pedras",
      anchorId: "coral-sol-e-chuva-resina",
      h3Title: "Resina Impermeabilizante Coral 3,6L Incolor Proteção Sol & Chuva Telhas Pedras",
      paragraphs: [
        <>A resina impermeabilizante Proteção Sol & Chuva da Coral possui base aquosa e acabamento incolor brilhante, sendo indicada para áreas externas como telhas, tijolos aparentes, pedras naturais, concreto aparente e fibrocimento.</>,
        <>Ela forma uma película protetora que barra a absorção de água, combate a formação de fungos e resiste à ação do sol e da chuva.</>,
        <>A ficha técnica aponta cura inicial em 24 horas e cura total de 120 horas para suportar limpeza ou atrito, não devendo ser aplicada em pisos horizontais transitáveis.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Resina acrílica incolor brilhante (base aquosa)" },
        { label: "Embalagem", value: "Galão de 3,6 L" },
        { label: "Tempo de Cura", value: "24 h inicial / 120 h (5 dias) cura total" }
      ],
      pros: [
        "Película brilhante incolor que protege e destaca o revestimento.",
        "Prevenção ativa contra mofo, algas e intempéries.",
        "Fórmula à base de água com alto rendimento por demão.",
        "Compatível com telhas, tijolos, pedras e concreto aparente."
      ],
      cons: [
        "Contraindicada para pisos ou lajes horizontais com tráfego.",
        "Cura final para lavagem e atrito exige 120 horas (5 dias)."
      ]
    },
    {
      id: "Impermeabilizante Asfaltico 3,6l Vonder",
      anchorId: "impermeabilizante-asfaltico-vonder",
      h3Title: "Impermeabilizante Asfaltico 3,6l Vonder",
      paragraphs: [
        <>Para blindar baldrames, alicerces e paredes em contato com o solo, o Impermeabilizante Asfáltico da Vonder forma uma manta asfáltica líquida de alta aderência.</>,
        <>Solúvel em água enquanto líquido e pronto para uso a frio, torna-se hidrorrepelente após a secagem, protegendo concreto, alvenaria, madeira natural e metal sem tratamento.</>,
        <>O galão de 3,6 L rende aproximadamente 7,2 m² (com 2 demãos) e atinge a cura total em apenas 3 a 4 horas.</>,
        <>Por ser de base asfáltica preta, exige recobrimento (proteção mecânica) caso fique exposto ao sol.</>
      ],
      specs: [
        { label: "Tipo / Base", value: "Emulsão asfáltica aquosa para aplicação a frio" },
        { label: "Rendimento Médio", value: "Aprox. 7,2 m² com 2 demãos (galão 3,6 L)" },
        { label: "Cura Total", value: "3 a 4 horas (requer proteção mecânica ao sol)" }
      ],
      pros: [
        "Pronto para uso a frio e solúvel em água antes de secar.",
        "Adere em concreto, alvenaria, madeira e metal não tratado.",
        "Cura total rápida entre 3 e 4 horas.",
        "Ótimo custo-benefício para vedação de fundações e baldrames."
      ],
      cons: [
        "Coloração preta impede o uso como acabamento aparente.",
        "Requer proteção mecânica (reboco ou contrapiso) contra raios UV."
      ]
    }
  ];

  const faqData: { question: string; answer: string[] }[] = [
    {
      question: "Qual o momento certo para impermeabilizar uma parede?",
      answer: [
        "Durante a obra é a etapa ideal e mais econômica, aplicando proteção nos alicerces e aditivos no reboco para evitar que a umidade se espalhe.",
        "Após a obra pronta, o momento certo é assim que surgirem sinais de mofo ou descascamento, usando bloqueadores e tintas impermeáveis sem precisar quebrar o acabamento."
      ]
    },
    {
      question: "Pode passar impermeabilizante na parede já pintada?",
      answer: [
        "Sim, desde que a tinta antiga esteja firme e bem aderida.",
        "Se houver bolhas ou descascamento, raspe e remova a pintura antiga para não prejudicar a aderência.",
        "Em pinturas íntegras, basta lixar, limpar a poeira, corrigir fissuras e usar um impermeabilizante compatível."
      ]
    },
    {
      question: "Qual a diferença entre impermeabilizante e selador?",
      answer: [
        "O selador serve apenas para fechar os poros do reboco novo e melhorar o rendimento da tinta na preparação da pintura, sem barrar a água.",
        "Já o impermeabilizante forma uma barreira química ou física que bloqueia infiltrações, umidade e mofo na estrutura."
      ]
    },
    {
      question: "Qual É Melhor: Manta Adesiva ou Manta Líquida?",
      answer: [
        "Depende diretamente do local de aplicação.",
        "A manta adesiva é uma fita pré-formada prática para reparos pontuais em telhas, rufos e calhas.",
        "Já para paredes e fachadas, a manta líquida é superior, pois se molda a cantos, recortes e texturas sem emendas e aceita pintura."
      ]
    }
  ];

  return (
    <div className="tw-article">
      {/* =====================================================================
          1. HERO SECTION (LCP Otimizado + H1 + Assinatura Guilherme Martins)
          ===================================================================== */}
      <div className="relative bg-gradient-to-b from-[#173B46] to-[#0F2931] text-white py-20 md:py-32 overflow-hidden border-b-4 border-[#E88735]">
        <div className="absolute inset-0 z-0">
          <img
            fetchPriority="high"
            src="/images/blog/melhor-impermeabilizante-para-paredes.webp"
            srcSet="/images/blog/melhor-impermeabilizante-para-paredes-small.webp 490w, /images/blog/melhor-impermeabilizante-para-paredes.webp 800w"
            sizes="(max-width: 768px) 490px, 800px"
            alt="Comparativo técnico do melhor impermeabilizante para paredes contra infiltração e mofo"
            title="Melhor Impermeabilizante para Paredes 12 Opções (2026)"
            width={800}
            height={533}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#173B46]/85 to-[#0F2931]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Melhor Impermeabilizante para Paredes: <br />
            <span className="text-[#E88735]">12 Opções (2026)</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a
                href="/autores/guilherme-martins/"
                className="flex items-center gap-2 hover:text-[#E88735] transition-colors font-semibold group"
              >
                <img
                  src="/images/Autores/Guilherme Martins.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-[#E88735] group-hover:scale-110 transition-transform object-cover"
                />
                Guilherme Martins
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CONTAINER CENTRAL DE LEITURA (max-w-4xl)
          ===================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ExitIntentPopup />

        {/* 2. INTRODUÇÃO CURTA */}
        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Manchas de umidade, pintura descascando e mofo indicam falhas na proteção da alvenaria.
          </p>
          <p>
            Para escolher o melhor impermeabilizante para paredes sem errar na compra, comparamos as fichas técnicas, composições, rendimentos e tempos de cura das 12 principais opções do mercado.
          </p>
        </div>

        {/* 3. SIMULADOR RÁPIDO DE ESCOLHA */}
        <div className="my-8 p-6 bg-gradient-to-br from-[#173B46] to-[#0F2931] text-white rounded-2xl shadow-xl border border-[#235362]">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#E88735] w-6 h-6 animate-pulse shrink-0" />
            <h2 className="text-xl font-bold text-white">Simulador Rápido: Qual é ideal para sua parede?</h2>
          </div>
          <p className="text-slate-300 text-sm mb-4">
            Responda em 1 clique conforme a situação da sua alvenaria para ir direto à recomendação certa:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setQuizResult('fachada')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center cursor-pointer ${
                quizResult === 'fachada'
                  ? 'bg-[#E88735] text-white border-[#E88735]'
                  : 'bg-[#173B46]/60 text-white border-[#235362] hover:border-[#E88735]'
              }`}
            >
              <span>Fachada Externa (Sol, Chuva e Microfissuras)</span>
              <ArrowRight size={18} className="shrink-0 ml-2" />
            </button>

            <button
              type="button"
              onClick={() => setQuizResult('reboco')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center cursor-pointer ${
                quizResult === 'reboco'
                  ? 'bg-[#E88735] text-white border-[#E88735]'
                  : 'bg-[#173B46]/60 text-white border-[#235362] hover:border-[#E88735]'
              }`}
            >
              <span>Reboco Esfarelando, Bolor ou Trinca Pontual</span>
              <ArrowRight size={18} className="shrink-0 ml-2" />
            </button>

            <button
              type="button"
              onClick={() => setQuizResult('pedra')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center cursor-pointer ${
                quizResult === 'pedra'
                  ? 'bg-[#E88735] text-white border-[#E88735]'
                  : 'bg-[#173B46]/60 text-white border-[#235362] hover:border-[#E88735]'
              }`}
            >
              <span>Tijolo Aparente, Pedras Naturais e Telhas</span>
              <ArrowRight size={18} className="shrink-0 ml-2" />
            </button>

            <button
              type="button"
              onClick={() => setQuizResult('obra')}
              className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center cursor-pointer ${
                quizResult === 'obra'
                  ? 'bg-[#E88735] text-white border-[#E88735]'
                  : 'bg-[#173B46]/60 text-white border-[#235362] hover:border-[#E88735]'
              }`}
            >
              <span>Aditivo na Massa, Reboco Novo ou Alicerce</span>
              <ArrowRight size={18} className="shrink-0 ml-2" />
            </button>
          </div>

          {quizResult && (
            <div className="mt-6 p-4 bg-[#173B46]/80 border border-[#235362] rounded-xl">
              {quizResult === 'fachada' && (
                <p className="text-sm leading-relaxed text-white">
                  🎯 Recomendação: Para fachadas sujeitas à variação térmica, prefira tintas elásticas como a{' '}
                  <a href="#vedapren-parede-18kg" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Vedacit Vedapren Parede 18 kg
                  </a>{' '}
                  (áreas grandes) ou a versão{' '}
                  <a href="#vedapren-parede-3-6kg" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Vedapren Parede 3,6 kg
                  </a>
                  , que impermeabilizam e já entregam acabamento branco lavável.
                </p>
              )}
              {quizResult === 'reboco' && (
                <p className="text-sm leading-relaxed text-white">
                  🎯 Recomendação: Estabilize rebocos arenosos e com mofo usando o{' '}
                  <a href="#sika-impermur-4-em-1" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Sika ImperMur 4 em 1
                  </a>
                  , refaça partes condenadas com o{' '}
                  <a href="#reboco-impermeavel-quartzolit" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Reboco Impermeável Quartzolit
                  </a>{' '}
                  ou vede frestas localizadas com o{' '}
                  <a href="#dryko-vedatudo-300g" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Dryko VedaTudo
                  </a>
                  .
                </p>
              )}
              {quizResult === 'pedra' && (
                <p className="text-sm leading-relaxed text-white">
                  🎯 Recomendação: Para manter o aspecto natural fosco, escolha o hidrofugante{' '}
                  <a href="#acquella-vedacit-incolor" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Acquella Vedacit
                  </a>{' '}
                  ou o oleofugante{' '}
                  <a href="#bellinzoni-aquarium-900ml" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Bellinzoni Aquarium
                  </a>{' '}
                  (mármores e áreas gourmet). Se preferir brilho protetor, aposte na{' '}
                  <a href="#resina-acrilica-bautech" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Resina Bautech
                  </a>{' '}
                  ou na{' '}
                  <a href="#coral-sol-e-chuva-resina" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Coral Sol & Chuva
                  </a>
                  .
                </p>
              )}
              {quizResult === 'obra' && (
                <p className="text-sm leading-relaxed text-white">
                  🎯 Recomendação: Na etapa de reboco e alvenaria nova, misture na água da argamassa o{' '}
                  <a href="#aditivo-sika-1-1l" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Sika 1 (1 L)
                  </a>{' '}
                  ou o balde{' '}
                  <a href="#votomassa-imperplus-18l" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Votomassa Imperplus 18 L
                  </a>
                  . Para blindar alicerces e baldrames no solo, aplique o{' '}
                  <a href="#impermeabilizante-asfaltico-vonder" className="text-[#E88735] underline font-bold hover:text-[#CF7122]">
                    Impermeabilizante Asfáltico Vonder
                  </a>
                  .
                </p>
              )}
            </div>
          )}
        </div>

        {/* 4. MISTURA DA TABELA COM A VITRINE */}
        <div className="mb-16 max-w-[850px] mx-auto bg-slate-50 p-2.5 rounded-2xl sm:p-5 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#173B46] mb-6 text-center">
            Quais os melhores impermeabilizantes para paredes em 2026?
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-left hidden md:table-cell">Categoria</th>
                  <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                  <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                </tr>
              </thead>
              <tbody>
                {showcaseItems.map((item) => {
                  const product = products[item.id];
                  const thumbSrc = product.image.replace(/\.webp$/, '-thumb.webp');
                  return (
                    <tr key={item.anchorId} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                      <td className="p-2 align-middle text-center">
                        <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                          <img
                            src={thumbSrc}
                            alt={item.shortName}
                            title={product.name}
                            width={60}
                            height={60}
                            className="max-w-full max-h-full block object-contain mix-blend-multiply"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle">
                        <a
                          href={`#${item.anchorId}`}
                          className="text-sm sm:text-base font-bold text-[#173B46] hover:text-[#E88735] hover:underline leading-tight block"
                        >
                          {item.shortName}
                        </a>
                        <div className="text-[11px] text-slate-600 mt-1 md:hidden">
                          {item.category}
                        </div>
                        <div className="text-[11px] font-bold text-[#173B46] mt-0.5 sm:hidden">
                          Nota: {item.score}
                        </div>
                      </td>
                      <td className="p-2 align-middle text-slate-600 text-xs sm:text-sm hidden md:table-cell">
                        {item.category}
                      </td>
                      <td className="p-2 align-middle text-center hidden sm:table-cell">
                        <span className="bg-[#FDF3EA] text-[#173B46] border border-[#E88735]/40 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {item.score}
                        </span>
                      </td>
                      <td className="p-2 align-middle text-center">
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="bg-[#E88735] text-[#112228] hover:bg-[#CF7122] hover:text-white font-bold no-underline text-xs py-2 px-3 rounded whitespace-nowrap inline-block transition-all sm:py-2.5 sm:px-5"
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

        {/* 5. ANÁLISES DETALHADAS DOS 12 IMPERMEABILIZANTES */}
        <div className="space-y-16">
          <h2 className="text-3xl font-extrabold text-[#173B46] border-b-4 border-[#E88735] pb-2 mt-16 flex items-center gap-2">
            Melhores Impermeabilizantes
          </h2>

          {productReviews.map((review, index) => {
            const product = products[review.id];
            return (
              <React.Fragment key={review.anchorId}>
                <section
                  id={review.anchorId}
                  className={`scroll-mt-24 pt-8 ${index > 0 ? 'border-t border-gray-100' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-[#173B46] mb-6 border-l-4 border-[#E88735] pl-4">
                    {index + 1}. {review.h3Title}
                  </h3>

                  <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <img
                      src={product.image}
                      alt={review.h3Title}
                      title={review.h3Title}
                      width={800}
                      height={533}
                      className="max-h-80 w-auto object-contain mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                    {review.paragraphs.map((pContent, pIdx) => (
                      <p key={pIdx}>{pContent}</p>
                    ))}
                  </div>

                  {/* Ficha Técnica Rápida */}
                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {review.specs.map((spec, sIdx) => (
                          <tr key={sIdx}>
                            <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-700 w-1/3">
                              {spec.label}
                            </th>
                            <td className="px-4 py-3 text-sm text-gray-600">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <AffiliateCard id={review.id} />

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                        <Check size={20} className="shrink-0" /> Prós
                      </h4>
                      <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                        {review.pros.map((pro, proIdx) => (
                          <li key={proIdx}>{pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                        <X size={20} className="shrink-0" /> Contras
                      </h4>
                      <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                        {review.cons.map((con, conIdx) => (
                          <li key={conIdx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* PONTO ESTRATÉGICO 1 DO BANNER DO MEIO: Logo após o 4º produto */}
                {index === 3 && <BunnerDoMeio />}
              </React.Fragment>
            );
          })}
        </div>

        {/* ===================================================================
            6. BLOCO DE CROSS-SELL (IDÊNTICO AO PADRÃO MELHORPARAFUSADEIRA)
            Posicionado logo após terminar os 12 produtos principais.
            =================================================================== */}
        <div className="my-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-[#E88735] w-7 h-7 shrink-0" />
            <h3 className="text-2xl font-bold text-[#173B46]">
              Complete seu Kit de Impermeabilização
            </h3>
          </div>
          <p className="text-slate-600 mb-6 text-base">
            O melhor impermeabilizante exige preparo e aplicação com os acessórios corretos para formar uma barreira uniforme e sem falhas. Veja os itens complementares recomendados:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Recomendação Cross-Sell 1: Kit Rolo + Trincha */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#FDF3EA] text-[#173B46] border border-[#E88735]/40 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Mais Vendido
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
                  <img
                    src={crossSellProducts["Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha"].image}
                    alt="Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#173B46] mb-2">
                  Kit Rolo de Lã Antigota + Trincha para Recortes
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Ideal para espalhar tintas impermeabilizantes elásticas, seladores e resinas acrílicas na espessura recomendada pelo fabricante sem respingar.
                </p>
              </div>
              <a
                href={crossSellProducts["Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha"].link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#E88735] text-[#112228] hover:bg-[#CF7122] hover:text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Recomendação Cross-Sell 2: Tela Poliéster */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#FDF3EA] text-[#173B46] border border-[#E88735]/40 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Reforço Estrutural
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
                  <img
                    src={crossSellProducts["Tela Poliéster De Reforço Para Impermeabilização - 50m X 1m"].image}
                    alt="Tela Poliéster De Reforço Para Impermeabilização - 50m X 1m"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#173B46] mb-2">
                  Tela Poliéster de Reforço para Impermeabilização (50m x 1m)
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Malha estruturante de alta tenacidade para reforçar cantos, rodapés, lajes e juntas onde membranas e argamassas sofrem maior tensão mecânica.
                </p>
              </div>
              <a
                href={crossSellProducts["Tela Poliéster De Reforço Para Impermeabilização - 50m X 1m"].link}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="bg-[#E88735] text-[#112228] hover:bg-[#CF7122] hover:text-white text-center font-bold text-sm py-2.5 px-4 rounded-lg block mt-4 transition-all no-underline shadow-sm"
              >
                VER PREÇO
              </a>
            </div>

            {/* Recomendação Cross-Sell 3: Fita Veda Trinca 3M Scotch */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-[#FDF3EA] text-[#173B46] border border-[#E88735]/40 py-1 px-3 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Vedação de Trincas
                </span>
                <div className="h-44 w-full flex items-center justify-center p-3 mb-4 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
                  <img
                    src={crossSellProducts["Fita Veda Trinca 3M Scotch 5cm x 10m Branco para Reparos de Paredes e Drywall"].image}
                    alt="Fita Veda Trinca 3M Scotch 5cm x 10m Branco para Reparos de Paredes e Drywall"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#173B46] mb-2">
                  Fita Veda Trinca 3M Scotch (5cm x 10m)
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Fita telada com adesivo de alta fixação para tratar rachaduras e fissuras dinâmicas em paredes de alvenaria e drywall antes de impermeabilizar.
                </p>
              </div>
              <a
                href={crossSellProducts["Fita Veda Trinca 3M Scotch 5cm x 10m Branco para Reparos de Paredes e Drywall"].link}
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
            7. CAUSAS DA UMIDADE E GUIA COMPLETO DE COMPRA E APLICAÇÃO
            =================================================================== */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#173B46] mb-6">
            O que pode causar umidade na parede?
          </h2>

          <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-12">
            <p>
              Identificar a origem da água evita o uso de produtos incompatíveis:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Infiltração externa: água da chuva que atravessa trincas ou falhas de vedação na fachada.
              </li>
              <li>
                Condensação: vapor acumulado em banheiros e cozinhas sem ventilação em contato com paredes frias.
              </li>
              <li>
                Umidade ascendente e capilaridade: água do solo que sobe pelos poros dos tijolos e da argamassa quando há falha na impermeabilização do alicerce, gerando salitre e descascamento no rodapé.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-[#173B46] mt-14 mb-8">
            Como escolher impermeabilizante para parede
          </h2>

          <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#173B46] mb-2">
                Escolha o Impermeabilizante Conforme o Tipo
              </h3>
              <p>
                Para fachadas e paredes sujeitas a sol, variação térmica e microfissuras, escolha um impermeabilizante flexível (tintas emborrachadas e mantas líquidas acrílicas), que acompanha a dilatação da base sem rasgar.
              </p>
              <p>
                Já para estruturas estáveis e sem movimentação — como baldrames, fundações e subsolos —, prefira o impermeabilizante rígido (aditivos para argamassa e cimentos rígidos), focado em resistir à umidade do solo.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#173B46] mb-2">
                Vai Usar em Bancadas, Cozinhas ou Áreas Gourmet? Opte por Impermeabilizantes Oleofugantes
              </h3>
              <p>
                Em paredes e bancadas de cozinhas ou áreas gourmet revestidas com pedras naturais, escolha um impermeabilizante oleofugante.
              </p>
              <p>
                Ele age por impregnação nos poros para impedir a entrada tanto de água quanto de óleos e gorduras sem formar película brilhante.
              </p>
              <p>
                Verifique na embalagem a compatibilidade com a porosidade da pedra.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#173B46] mb-2">
                Se For Usar em Banheiros, Prefira Impermeabilizantes Cimentícios Flexíveis
              </h3>
              <p>
                No box do banheiro e demais áreas molhadas, utilize impermeabilizantes cimentícios flexíveis.
              </p>
              <p>
                Eles unem a forte aderência do cimento à elasticidade necessária para suportar movimentações da estrutura, permitindo colar porcelanatos e azulejos diretamente por cima.
              </p>
              <p>
                Aplique cobrindo piso, paredes, ralos e encontros.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#173B46] mb-2">
                Para Pedras, Fachadas e Determinados Revestimentos, Escolha Impermeabilizantes Hidrofugantes
              </h3>
              <p>
                Para proteger tijolos aparentes, concreto à vista e pedras porosas sem alterar a estética fosca original, opte pelos impermeabilizantes hidrofugantes.
              </p>
              <p>
                Diferente das resinas brilhantes, eles penetram nos poros sem formar filme superficial, repelindo a chuva enquanto deixam a parede respirar.
              </p>
              <p>
                Corrija trincas antes de aplicar.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#173B46] mb-2">
                Quer Secagem Rápida? Escolha Impermeabilizante que Mostre Tempo ao Toque, Cura e entre Demãos
              </h3>
              <p>
                Compare na ficha técnica três prazos distintos: secagem ao toque, intervalo entre demãos e cura total.
              </p>
              <p>
                Como temperatura, umidade do ar e ventilação alteram esses tempos, respeite rigorosamente o consumo por m² e os intervalos do fabricante para não comprometer a película protetora.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-[#173B46] mb-2">
                Como preparar a parede externa antes da impermeabilização?
              </h2>
              <p>
                Antes de aplicar o produto, inspecione a fachada: corrija rachaduras, raspe partes soltas de tinta ou reboco fraco e lave a superfície para remover poeira e mofo.
              </p>
              <p>
                Aguarde a secagem completa da alvenaria, utilize EPIs e siga a diluição indicada pelo fabricante.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-[#173B46] mb-2">
                Quais Ferramentas São Necessárias para Aplicar o Impermeabilizante?
              </h2>
              <p>
                As ferramentas variam conforme o produto: tintas, resinas e mantas líquidas pedem rolo de lã, trincha ou pulverizador; já compostos cimentícios e bases rugosas exigem broxa, enquanto argamassas prontas requerem colher de pedreiro e desempenadeira.
              </p>
              <p>
                Use também escovas firmes na limpeza prévia.
              </p>
            </div>

            <div className="w-full flex justify-center my-8 not-prose">
              <img
                src="/images/blog/preparacao-e-aplicacao-impermeabilizante-parede.webp"
                alt="Profissional aplicando membrana impermeabilizante com rolo em parede de alvenaria"
                title="Preparação e aplicação de impermeabilizante na alvenaria"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-[#173B46] mb-4">
                Como impermeabilizar parede interna com umidade
              </h2>

              <div className="grid gap-4 not-prose">
                {[
                  {
                    title: "Passo 1: identifique o local com umidade",
                    sentences: [
                      "Verifique a extensão da mancha e a origem da infiltração.",
                      "Caso haja vazamentos hidráulicos ou danos estruturais, resolva a causa primeiro."
                    ]
                  },
                  {
                    title: "Passo 2: limpeza da parede",
                    sentences: [
                      "Raspe a pintura solta, lave a parede com água, sabão e escova para retirar poeira e mofo, e deixe secar completamente."
                    ]
                  },
                  {
                    title: "Passo 3: aplicação de produto anti-mofo (opcional)",
                    sentences: [
                      "Em áreas com bolor persistente, aplique um limpador fungicida específico sobre o reboco limpo antes de iniciar a vedação."
                    ]
                  },
                  {
                    title: "Passo 4: escolha do impermeabilizante",
                    sentences: [
                      "Selecione um bloqueador de umidade, argamassa polimérica ou tinta impermeável compatível com paredes internas, conforme a ficha técnica."
                    ]
                  },
                  {
                    title: "Passo 5: prepare o impermeabilizante",
                    sentences: [
                      "Homogeneíze o produto e, se houver recomendação de diluição ou mistura de componentes, siga as medidas exatas do fabricante."
                    ]
                  },
                  {
                    title: "Passo 6: aplique a primeira camada",
                    sentences: [
                      "Com rolo, trincha ou broxa, espalhe a primeira demão de forma uniforme de baixo para cima, preenchendo todos os poros."
                    ]
                  },
                  {
                    title: "Passo 7: espere o tempo de secagem",
                    sentences: [
                      "Respeite o tempo de secagem entre camadas informado na embalagem, que costuma levar de 2 a 6 horas."
                    ]
                  },
                  {
                    title: "Passo 8: aplique a segunda camada",
                    sentences: [
                      "Aplique a segunda demão em sentido cruzado à primeira para eliminar falhas de cobertura e garantir a espessura ideal."
                    ]
                  },
                  {
                    title: "Passo 9: deixe secar completamente",
                    sentences: [
                      "Aguarde o período de cura total recomendado pelo fabricante antes de pintar ou retomar o uso do ambiente."
                    ]
                  },
                  {
                    title: "Passo 10: verifique a eficácia",
                    sentences: [
                      "Após a cura, jogue um pouco de água na superfície tratada e confirme se o líquido escorre sem ser absorvido."
                    ]
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="text-lg font-bold text-[#173B46] mb-2">{item.title}</h3>
                    <div className="space-y-2 text-gray-700 text-base leading-relaxed">
                      {item.sentences.map((s, sIdx) => (
                        <p key={sIdx}>{s}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-center my-8 not-prose">
              <img
                src="/images/blog/diferenca-impermeabilizante-selador-parede.webp"
                alt="Teste de repelência e estanqueidade com água sobre parede impermeabilizada"
                title="Teste de repelência e estanqueidade na parede impermeabilizada"
                width={800}
                height={533}
                className="rounded-2xl shadow-sm border border-gray-100 max-w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* FOTO DO ESPECIALISTA + BOX DESTAQUE: ERROS NA HORA DE IMPERMEABILIZAR */}
            <div className="space-y-4 pt-6">
              <div className="w-full flex justify-center my-6 not-prose">
                <a href="/autores/guilherme-martins/" aria-label="Perfil de Guilherme Martins">
                  <img
                    src="/images/Autores/Guilherme Martins.webp"
                    alt="Guilherme Martins"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#E88735] hover:scale-105 transition-transform duration-200 shadow-md"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="my-8 p-6 bg-[#FDF3EA] border-l-4 border-[#E88735] rounded-r-xl shadow-sm text-slate-800 not-prose">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-[#E88735] shrink-0" size={20} />
                  <h2 className="text-lg font-bold text-[#173B46]">
                    Erros na hora de impermeabilizar
                  </h2>
                </div>
                <div className="space-y-3 text-base leading-relaxed font-medium text-slate-800">
                  <p>
                    O erro mais comum é escolher o produto apenas pelo preço sem avaliar se a parede sofre movimentação térmica, o que causa fissuras na barreira protetora.
                  </p>
                  <p>
                    Verifique sempre a condição da base, a pressão da água e as recomendações da norma ABNT NBR 9575 e da ficha técnica antes de aplicar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PONTO ESTRATÉGICO 2 DO BANNER DO MEIO: Antes do FAQ */}
        <BunnerDoMeio />

        {/* ===================================================================
            8. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO EXPANSÍVEL)
            =================================================================== */}
        <section className="mt-16 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
          <h2 className="text-3xl font-bold text-[#173B46] mb-4 text-center">
            Perguntas frequentes (FAQ)
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Clique sobre cada pergunta abaixo para expandir a resposta e entender melhor os detalhes técnicos antes de comprar.
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
                  aria-expanded={openFaq === index}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E88735] text-[#112228] flex items-center justify-center font-bold text-xs shrink-0">
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
                  <div className="px-5 pb-5 pt-3 text-gray-600 border-t border-slate-100 space-y-3">
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
            9. CONCLUSÃO DE ALTO CONTRASTE
            =================================================================== */}
        <section className="mt-16 bg-gradient-to-br from-[#173B46] to-[#0F2931] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden border-t-4 border-[#E88735]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E88735] opacity-15 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E88735] opacity-15 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold mb-6 text-[#E88735]">
              Proteja suas paredes contra a umidade com o impermeabilizante correto
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Compare as especificações técnicas desta lista com a necessidade real da sua parede para investir no produto certo logo na primeira tentativa.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Siga rigorosamente as orientações de preparo da base, consumo por m² e intervalos entre demãos do fabricante e garanta proteção definitiva contra infiltrações e mofo no seu imóvel.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MelhorImpermeabilizanteParaParedes;
