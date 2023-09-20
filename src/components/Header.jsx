import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './elements/Button';


const Header = ( {quantity}) => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to='/'>
          <Logo>FLOATATION</Logo>
        </Link>
        <Navbar>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/products'>Products</NavbarLink>
          <NavbarLink to='/contact'>Contact</NavbarLink>
          <ButtonContainer to='/cart'>
            <Button content={<FaShoppingCart />} shape='round' />
            {quantity !== 0 && <Quantity>{quantity}</Quantity>}
          </ButtonContainer>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  quantity: PropTypes.number.isRequired
}

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2.4rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const ButtonContainer = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
`


export default Header