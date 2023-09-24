import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../components/elements/Button'
import { ShopContext } from '../../App'

const ProductCard = ({ id, title, price, image}) => {
  const product = { id, title, price, image };
  const addToCart = useContext(ShopContext).addToCart;

  return (
    <ProductCardWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Info>
          <Title>{title}</Title>
          <div>${price.toFixed(2)}</div>
        </Info>
        <Button
          onClick={() => addToCart(product)}
          content="Add to cart"
          size="wide"
          color="dark"
          $animation="color"
        />
      </Details>
    </ProductCardWrapper>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`

const Image = styled.img`
  height: 100%;
`

const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`

const Title = styled.div`
  font-weight: bold;
`

export default ProductCard