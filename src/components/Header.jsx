import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/contact'>Contact</Link>
        <button>Cart</button>
    </header>
  )
}

export default Header