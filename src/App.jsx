import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {
  const [cart, setCart] = useState({});
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);

  const removeFromCart = (product) => {
    const id = product.id;
    const title = product.title; 
    const price = product.price; 
    const image = product.image;

    setCart((prevCart) => {
      const updatedCart = {...prevCart};
      if (updatedCart[id].quantity === 1) delete updatedCart[id];
      else {
        const quantity = updatedCart[id].quantity - 1;
        updatedCart[id] = {title: title, price: price, image: image, quantity: quantity};
      }
      return updatedCart;
    });
    setNumberOfItemsInCart((prevNumberOfItemsInCart) => (prevNumberOfItemsInCart - 1));
  }

  const addToCart = (product) => {
    const id = product.id;
    const title = product.title; 
    const price = product.price; 
    const image = product.image;

    setCart((prevCart) => {
      const updatedCart = {...prevCart};
      if (id in updatedCart) {
        const quantity = updatedCart[id].quantity + 1;
        updatedCart[id] = {title: title, price: price, image: image, quantity: quantity};
      }
      else updatedCart[id] = {title: title, price: price, image: image, quantity: 1};
      return updatedCart;
    });
    setNumberOfItemsInCart((prevNumberOfItemsInCart) => (prevNumberOfItemsInCart + 1));
  }

  return (
    <>
      <Router>

        <Header quantity={numberOfItemsInCart} />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products addToCart={addToCart}/>} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
        </Routes>

      </Router>
      
      <Footer />
    </>
  )
}


export default App
