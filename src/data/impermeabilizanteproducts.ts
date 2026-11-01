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
  }
};

export type ProductId = keyof typeof products;
