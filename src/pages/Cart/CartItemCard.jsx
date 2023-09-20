import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../../components/elements/Button'

const CartItemCard = ({ id, quantity, title, price, image, addToCart, removeFromCart }) => {
  const product = {id:id, title: title, price: price, image: image};
  
  return (
    <CartItemCardWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
        <Details>
          <Title>{title}</Title>
          <Price>Price:${price.toFixed(2)}</Price>
          <AmountChanger>
            <Button
              onClick={() => removeFromCart(product)}
              content={<FaMinus />}
              color="grey"
              animation="color"
            ></Button>
            <div>{quantity}</div>
            <Button
              onClick={() => addToCart(product)}
              content={<FaPlus />}
              color="grey"
              animation="color"
            ></Button>
          </AmountChanger>
          <Price>Total:${(price * quantity).toFixed(2)}</Price>
        </Details>
    </CartItemCardWrapper>
  )
}

CartItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired, 
  removeFromCart: PropTypes.func.isRequired
}

const CartItemCardWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgba(0,0,0);
  border-bottom-color: ${({ theme }) => theme.colors.grey.main};;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-left: 30rem;
    margin-right: 30rem;
    height: 60rem;
    padding-bottom: 50px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-left: 10rem;
    margin-right: 10rem;
    height: 60rem;
  }
`

const ImageContainer = styled.div`
  height: 13rem;
  width: 13rem;
  margin: auto;
  overflow: hidden;
`

const Image = styled.img`
  width: auto;
  width: 100%;
`

const Price = styled.div`
  min-width: 3rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
  margin-left: 20px;

  @media (max-width: 900px) {
    text-align: center;
    flex-direction: column;
    margin-left: 0;
    height: 20rem;
  }
`

const Title = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 30rem;
  font-weight: bold;
  overflow: hidden;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export default CartItemCard