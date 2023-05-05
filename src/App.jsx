import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Navbar from "./components/Navbar/Navbar";
import FooterBlack from "./components/FooterBlack/FooterBlack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        {/* <FooterBlack /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
