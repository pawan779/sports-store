import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Index";
import Login from "../pages/Login";

export default function Navigation() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shop" element={<About />}></Route>
        <Route path="/blog" element={<About />}></Route>
        <Route path="/pages" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}
