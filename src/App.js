import React from "react";
import { BrowserRouter } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { FireApp } from "./firebase";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (

    <BrowserRouter>
      <FireApp />
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet treats for you' data={productDataTwo} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
