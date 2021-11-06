import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productsMainCatalog, productsSecondCatalog } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Oferta especiais da semana' data={productsMainCatalog} />
      <Feature />
      <Products heading='Os doces mais pedidos' data={productsSecondCatalog} />
      <Footer />
    </Router>
  );
}

export default App;