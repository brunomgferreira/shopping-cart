import React from 'react'
import styled from 'styled-components'
import TravisScottNikeSBDunk from '../assets/Travis-Scott-Nike-SB-Dunk-Small.png'
import { Link } from 'react-router-dom'
import Button from '../components/elements/Button'

const Home = () => {
  return (
    <HomeWrapper>
      <LinkWrapper to='/shopping-cart/products'>
          <Button
            content="Shop now"
            size="big"
            shape="round"
            color="primary"
            $animation="scale"
          ></Button>
      </LinkWrapper>
      <Image src={TravisScottNikeSBDunk}></Image>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  overflow: hidden;
  max-height: 100vh;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 0rem;
  }
`

const LinkWrapper = styled(Link)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Image = styled.img`
  z-index: -1;
  height: 100%;
  object-fit: cover;
  object-position: top;

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

export default Home