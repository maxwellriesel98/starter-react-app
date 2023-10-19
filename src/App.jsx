import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../b-i-a-main/src/components/Header";
import Footer from "../../b-i-a-main/src/components/Footer";
import HomePage from "../../b-i-a-main/src/components/Homepage";
import AboutPage from "../../b-i-a-main/src/components/AboutPage";
import IndustryPage from "../../b-i-a-main/src/components/IndustryPage";
import ServicesPage from "../../b-i-a-main/src/components/ServicesPage";
import ContactPage from "../../b-i-a-main/src/components/ContactPage";
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
