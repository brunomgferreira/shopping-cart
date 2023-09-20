import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import CartItemCard from './Cart/CartItemCard';
import Button from '../components/elements/Button';
import { Link } from 'react-router-dom';

const Cart = ({ cart, addToCart, removeFromCart }) => {

    const calculateTotal = (cart) => {
        const itemsId = Object.keys(cart);
        const total = itemsId.reduce((total, id) => total + (cart[id].price * cart[id].quantity),0);
        return total.toFixed(2);
    }
    
    const loadCartItems = (cart) => {
        const itemsId = Object.keys(cart);
        const cartItems = itemsId.map((id) => {
            const quantity = cart[id].quantity;
            const title = cart[id].title;
            const price = cart[id].price;
            const image = cart[id].image;
            return <CartItemCard key={uuidv4()} id={id} quantity={quantity} title={title} price={price} image={image} addToCart={addToCart} removeFromCart={removeFromCart} />
        })
        return cartItems;
    }


    return (
        <CartWrapper>
            <Title>Your Shopping cart</Title>
            <Products>
                {loadCartItems(cart)}
            </Products>
            <Total>Total:${calculateTotal(cart)}</Total>
            <BttnsWrapper>
                <Button
                    content="Checkout"
                    size="wide"
                    color="primary"
                    $animation="color"
                />
                <Link to='/products'>
                    <Button
                        content="Continue buying"
                        size="wide"
                        color="red"
                        $animation="color"
                    />
                </Link>  
            </BttnsWrapper>
        </CartWrapper>
    )

}

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired, 
    removeFromCart: PropTypes.func.isRequired
}

const CartWrapper = styled.div`
    color: ${({ theme }) => theme.colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${({ theme }) => theme.widths.content};
    margin: 0 auto;
    margin-bottom: 10rem;
    gap: 4rem;
    height: 100%;
    padding-top: 6rem;
    font-size: 3rem;
    transition: right 0.85s ease-in-out;

    @media (max-width: 480px) {
        width: 100%;
    }
`

const Title = styled.div`
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: bold;
`

const Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    overflow: auto;
`

const Total = styled.div`
    font-weight: bold;
    padding-top: 6rem;
`

const BttnsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default Cart