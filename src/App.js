import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import OrderTracker from "./Pages/OrderTracker";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useState } from "react";
import Cart from "./Pages/Cart";

const App = ()=>{
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/tracker" element={<OrderTracker/>} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;