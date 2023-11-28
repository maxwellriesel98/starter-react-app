import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
/*import HomePage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import IndustryPage from "./components/IndustryPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import SentPage from "./components/SentPage";*/
import "./App.css";


function App() {
  return (
    <div className="App bodycolor">
      <Header />
    
      <Footer />
    </div>
  );
}

export default App;
