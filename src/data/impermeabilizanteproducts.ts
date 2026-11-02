export interface Product {
  name: string;
  link: string;
  image: string;
}

export const products: Record<string, Product> = {
  "Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas": {
    name: "Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas",
    link: "https://meli.la/2jKB6Ts",
    image: "/images/produtos/Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas.webp"
  },
  "Fundo Preparado Superfícies Impermeável Sika Impermur 4 Em 1": {
    name: "Fundo Preparado Superfícies Impermeável Sika Impermur 4 Em 1",
    link: "https://meli.la/24iwpKu",
    image: "/images/produtos/Fundo Preparado Superfícies Impermeável Sika Impermur 4 Em 1.webp"
  },
  "Resina Acrílica Bautech 3,6L Brilhante Incolor Multiuso Alta Cobertura": {
    name: "Resina Acrílica Bautech 3,6L Brilhante Incolor Multiuso Alta Cobertura",
    link: "https://meli.la/1r7TzKn",
    image: "/images/produtos/Resina Acrílica Bautech 3,6L Brilhante Incolor Multiuso Alta Cobertura.webp"
  },
  "Massa Pronta Reboco Impermeável Quartzolit 20kg Cinza": {
    name: "Massa Pronta Reboco Impermeável Quartzolit 20kg Cinza",
    link: "https://meli.la/2Zg4R6H",
    image: "/images/produtos/Massa Pronta Reboco Impermeável Quartzolit 20kg Cinza.webp"
  },
  "Dryko - Vedatudo Impermeável Milagroso 300g Acabamento Brilhante Cor Incolor": {
    name: "Dryko - Vedatudo Impermeável Milagroso 300g Acabamento Brilhante Cor Incolor",
    link: "https://meli.la/1Jn3s2K",
    image: "/images/produtos/Dryko - Vedatudo Impermeável Milagroso 300g Acabamento Brilhante Cor Incolor.webp"
  },
  "Sika-1 Aditivo Impermeabilizante Cimento Concreto 1l - 2 Un": {
    name: "Aditivo impermeabilizante Sika 1 bisnaga de 1 L",
    link: "https://meli.la/2TQBqnz",
    image: "/images/produtos/Sika-1 Aditivo Impermeabilizante Cimento Concreto 1l - 2 Un.webp"
  },
  "Aditivo impermeabilizante Sika 1 bisnaga de 1 L": {
    name: "Aditivo impermeabilizante Sika 1 bisnaga de 1 L",
    link: "https://meli.la/2TQBqnz",
    image: "/images/produtos/Sika-1 Aditivo Impermeabilizante Cimento Concreto 1l - 2 Un.webp"
  },
  "Impermeabilizante Bellinzoni Aquarium 900ml Mármore Granito": {
    name: "Impermeabilizante Bellinzoni Aquarium 900ml Mármore Granito",
    link: "https://meli.la/1DyxDmd",
    image: "/images/produtos/Impermeabilizante Bellinzoni Aquarium 900ml Mármore Granito.webp"
  },
  "Acquella Vedacit Tijolo Pedra Telha Incolor": {
    name: "Acquella Vedacit Tijolo Pedra Telha Incolor",
    link: "https://meli.la/17Rf8TZ",
    image: "/images/produtos/Acquella Vedacit Tijolo Pedra Telha Incolor.webp"
  },
  "Vedapren Parede Impermeável 3,6kg Branco Vedacit": {
    name: "Vedapren Parede Impermeável 3,6kg Branco Vedacit",
    link: "https://meli.la/1fhCMCJ",
    image: "/images/produtos/Vedapren Parede Impermeável 3,6kg Branco Vedacit.webp"
  },
  "Impermeabilizante Votomassa Imperplus 18l Concreto Balde": {
    name: "Impermeabilizante Votomassa Imperplus 18l Concreto Balde",
    link: "https://meli.la/1nRXXLd",
    image: "/images/produtos/Impermeabilizante Votomassa Imperplus 18l Concreto Balde.webp"
  },
  "Resina Impermeabilizante Coral 3,6L Incolor Proteção Sol & Chuva Telhas Pedras": {
    name: "Resina Impermeabilizante Coral 3,6L Incolor Proteção Sol & Chuva Telhas Pedras",
    link: "https://meli.la/2F24x4R",
    image: "/images/produtos/Resina Impermeabilizante Coral 3,6L Incolor Proteção Sol & Chuva Telhas Pedras.webp"
  },
  "Impermeabilizante Asfaltico 3,6l Vonder": {
    name: "Impermeabilizante Asfaltico 3,6l Vonder",
    link: "https://meli.la/175zKd7",
    image: "/images/produtos/Impermeabilizante Asfaltico 3,6l Vonder.webp"
  }
};

export type ProductId = keyof typeof products;
