import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Navbar from "./components/Navbar/Navbar";
import FooterBlack from "./components/FooterBlack/FooterBlack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PoezjaPage from "./components/Sections/Poezja/PoezjaPage";
import ProzaPage from "./components/Sections/Proza/ProzaPage";
import ArchiwaliaPage from "./components/Sections/Archiwalia/ArchiwaliaPage";
import RecenzjePage from "./components/Sections/Recenzje/RecenzjePage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poezja" element={<PoezjaPage />} />
          <Route path="/proza" element={<ProzaPage />} />
          <Route path="/archiwalia" element={<ArchiwaliaPage />} />
          <Route path="/recenzje" element={<RecenzjePage />} />
          {/* <Route path="/esej" element={<EsejPage />} /> */}
          {/* <Route path="/varia" element={<VariaPage />} /> */}
        </Routes>
        <Footer />
        {/* <FooterBlack /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
