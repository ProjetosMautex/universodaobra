export interface CrossSellProduct {
  name: string;
  link: string;
  image: string;
}

export const crossSellProducts: Record<string, CrossSellProduct> = {
  "Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha": {
    name: "Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha",
    link: "https://meli.la/2tct6rK",
    image: "/images/produtos/Kit Rolo Antigota Pelo Baixo Lã Garfo Gaiola 23cm E Trincha.webp"
  },
  "Tela Poliéster De Reforço Para Impermeabilização - 50m X 1m": {
    name: "Tela Poliéster De Reforço Para Impermeabilização - 50m X 1m",
    link: "https://meli.la/1pBkJKH",
    image: "/images/produtos/Tela Poliéster De Reforço Para Impermeabilização - 50m X 1m.webp"
  },
  "Fita Veda Trinca 3M Scotch 5cm x 10m Branco para Reparos de Paredes e Drywall": {
    name: "Fita Veda Trinca 3M Scotch 5cm x 10m Branco para Reparos de Paredes e Drywall",
    link: "https://meli.la/1WU5tDN",
    image: "/images/produtos/Fita Veda Trinca 3M Scotch 5cm x 10m Branco para Reparos de Paredes e Drywall.webp"
  }
};

export type CrossSellProductId = keyof typeof crossSellProducts;
