import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Composents/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Logo from "./Composents/Logo";
import CountryInfo from "./Pages/CountryInfo";

const App = () => {
  return (
    <div>
      <Logo />
      <NavBar />
      <Routes>
        {" "}
           
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/country-Info" element={<CountryInfo />} />       
      </Routes>
    </div>
  );
};

export default App;
