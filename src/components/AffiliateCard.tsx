import React from 'react';
import {
  products as impermeabilizanteProducts,
  type Product,
  type ProductId,
} from '../data/impermeabilizanteproducts';
import './AffiliateCard.css';

const ShoppingCart: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="affiliate-card__btn-icon"
    aria-hidden="true"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export interface AffiliateCardProps {
  id?: ProductId | string;
  productId?: ProductId | string;
  buttonText?: string;
}

/**
 * Busca centralizada de produtos.
 * Quando novos bancos de dados de produtos forem criados (ex.: tintas, ferramentas),
 * basta importá-los acima e incluí-los no objeto `ALL_PRODUCTS` abaixo.
 */
const ALL_PRODUCTS: Record<string, Product> = {
  ...impermeabilizanteProducts,
};

export const AffiliateCard: React.FC<AffiliateCardProps> = ({
  id,
  productId,
  buttonText,
}) => {
  const targetId = id || productId;
  const product = targetId ? ALL_PRODUCTS[targetId] : undefined;

  if (!product) return null;

  return (
    <div className="affiliate-card">
      <div className="affiliate-card__title">{product.name}</div>

      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
        className="affiliate-card__btn"
        aria-label={'Ver preço de ' + (product.name || 'produto')}
      >
        <ShoppingCart />
        {buttonText ? buttonText.toUpperCase() : 'CLIQUE AQUI PARA VER O PREÇO'}
      </a>

      <p className="affiliate-card__disclaimer">
        * Você será redirecionado para a loja oficial
      </p>
    </div>
  );
};

export default AffiliateCard;
