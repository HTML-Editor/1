// APP.JSX - the site layout and the list of pages (routes).
// Every page shows: Navbar on top, the page in the middle, Footer at the bottom.

import { useState } from "react";
import "./App.css";
// HashRouter keeps URLs like /#/about. Needed on GitHub Pages because it cannot
// redirect unknown paths. Do not switch to BrowserRouter unless you add a 404.html fallback.
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// One import per page. To add a page: create src/pages/NewPage.jsx, import it here,
// then add a <Route> below and a link in Navbar.jsx and Footer.jsx.
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Achievements from "./pages/Achievements";
import "./index.css";
function App() {
  // Navbar and Footer sit OUTSIDE <Routes>, so they appear on every page.
  return (
    <Router>
      <Navbar />
      {/*
        ROUTES: path = the URL after /#, element = the page shown.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        {/*
          :id is the product id from src/data/data.js (e.g. /#/products/5).
        */}
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
