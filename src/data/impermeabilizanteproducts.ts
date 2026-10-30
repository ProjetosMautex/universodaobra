export interface Product {
  name: string;
  link: string;
  image: string;
}

export const products: Record<string, Product> = {
  "vedacit-vedapren-parede-18l": {
    name: "Impermeabilizante Acrílico Vedacit Vedapren Parede 18L",
    link: "https://meli.la/exemplo-vedapren-18l",
    image: "/images/products/vedacit-vedapren-parede-18l.webp"
  },
  "sika-igolflex-branco-18kg": {
    name: "Manta Líquida Impermeabilizante Sika Igolflex Branco 18kg",
    link: "https://meli.la/exemplo-sika-igolflex-18kg",
    image: "/images/products/sika-igolflex-branco-18kg.webp"
  }
};

export type ProductId = keyof typeof products;
