import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import PageNotFound from "../Pages/PageNotFound";
import SearchBox from "../Components/SearchBox";

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <SearchBox />
                <Home />
              </>
            }
          />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/products/:id" exact element={<ProductDetail />} />
          <Route path="*" element={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
