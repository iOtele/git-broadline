import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
// import Listings from "./Pages/Listing";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import AircraftPurchase from "./Pages/AircraftPurchase";
import AircraftDetailsPage from "./Pages/AircraftDetailsPage";
import Testimonials from "./Pages/Testimonial";
import Faqs from "./Pages/Faqs";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase" element={<AircraftPurchase />} />
        <Route path="/aircraft/:id" element={<AircraftDetailsPage />} />
        {/* <Route path="/listing" element={<Listings />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
