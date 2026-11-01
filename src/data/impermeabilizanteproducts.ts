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
  "pintura-impermeavel-vedacit-vedapren-parede-branco-18kg": {
    name: "Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas",
    link: "https://meli.la/2jKB6Ts",
    image: "/images/produtos/Pintura Impermeável Vedacit Vedapren Parede Branco 18kg para Paredes Externas.webp"
  }
};

export type ProductId = keyof typeof products;
