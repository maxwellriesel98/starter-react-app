import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import IndustryPage from "./components/IndustryPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import "./App.css";


function App() {
  return (
    <div className="App bodycolor">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/industrylinks" element={<IndustryPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/success" element={<h1>Message Sent!</h1>}/>
        <Route path="/failure" element={<h1>Message Failed to Send. We apologize, contact us instead at.....</h1>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
