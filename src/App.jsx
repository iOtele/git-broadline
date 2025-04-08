import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Listings from "./Pages/Listing";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/listing" element={<Listings />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
