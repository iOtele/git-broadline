import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contacts from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import AircraftDetailsPage from "./Pages/AircraftDetailsPage";
import Testimonials from "./Pages/Testimonial";
import Faqs from "./Pages/Faqs";
import Blog from "./Pages/Blog";
import AircraftCatalog from "./Pages/AircraftCatalog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalog" element={<AircraftCatalog />} />
        <Route path="/aircraft/:id" element={<AircraftDetailsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
