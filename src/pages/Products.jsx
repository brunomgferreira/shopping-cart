import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from './Products/ProductCard';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setProducts(await fetchProducts());
  }

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    return data
  }

  const productCards = products.map((product) => (
    <ProductCard 
      key={uuidv4()}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      addToCart={addToCart}
    />
  ));

  return <ProductsWrapper>{productCards}</ProductsWrapper>
}

Products.propTypes = {
  addToCart: PropTypes.func.isRequired
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default Products