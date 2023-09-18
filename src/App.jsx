import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

      </Router>
      
      <Footer />
    </>
  )
}

export default App
