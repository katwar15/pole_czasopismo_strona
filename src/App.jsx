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
import EsejPage from "./components/Sections/Esej/EsejPage";
import VariaPage from "./components/Sections/Varia/VariaPage";
import RedakcjaPage from "./components/Redakcja/RedakcjaPage";
import WstepPage from "./components/Sections/Wstep/WstepPage";
import KontaktPage from "./components/Kontakt/KontaktPage";
import WaldemarPage from "./components/Sections/Proza/TekstyProza/BawolekPage";
import FoksPage from "./components/Sections/Proza/TekstyProza/FoksPage";

import KolodziejekPage from "./components/Sections/Proza/TekstyProza/KolodziejekPage";
import StrumykPage from "./components/Sections/Proza/TekstyProza/StrumykPage";
import PtaszykPage from "./components/Sections/Varia/TekstyVaria/PtaszykPage";
import WiedemannSzumlewiczPage from "./components/Sections/Varia/TekstyVaria/WiedemannSzumlewiczPage";
import KrajewskiPage from "./components/Sections/Archiwalia/TekstyArchiwalia/KrajewskiPage";
import DmitrocaPage from "./components/Sections/Varia/TekstyVaria/DmitrocaPage";
import WiszniewskaPage from "./components/Sections/Varia/TekstyVaria/WiszniewskaPage";
import PrzybylaPage from "./components/Sections/Archiwalia/TekstyArchiwalia/PrzybylaPage";
import FitzgibbonPage from "./components/Sections/Varia/TekstyVaria/FitzgibbonPage";
import SkalskiPage from "./components/Sections/Esej/TestyEsej/SkalskiPage";
import BozekPage from "./components/Sections/Esej/TestyEsej/BozekPage";
import OpalkaPage from "./components/Sections/Esej/TestyEsej/OpalkaPage";
import RusinPage from "./components/Sections/Esej/TestyEsej/RusinPage";
import WiedemannPage from "./components/Sections/Esej/TestyEsej/WiedemannPage";
import LemieszkoPage from "./components/Sections/Esej/TestyEsej/LemieszkoPage";
import MariannaPage from "./components/Sections/Archiwalia/TekstyArchiwalia/MariannaPage";
import PolakPage from "./components/Sections/Recenzje/TekstyRecenzje/PolakPage";
import DabrowskiPage from "./components/Sections/Recenzje/TekstyRecenzje/DabrowskiPage";
import PyzikPage from "./components/Sections/Recenzje/TekstyRecenzje/PyzikPage";
import LisRecenzjaPage from "./components/Sections/Recenzje/TekstyRecenzje/LisRecenzjaPage";
import KowalskiPage from "./components/Sections/Poezja/TestyPoezja/KowalskiPage";
import RolandoPage from "./components/Sections/Poezja/TestyPoezja/RolandoPage";
import KurylakPage from "./components/Sections/Poezja/TestyPoezja/KurylakPage";
import KitschPage from "./components/Sections/Poezja/TestyPoezja/KitschPage";
import MatwiejczukPage from "./components/Sections/Poezja/TestyPoezja/MatwiejczukPage";
import LaurePage from "./components/Sections/Archiwalia/TekstyArchiwalia/LaurePage";
import LisPage from "./components/Sections/Proza/TekstyProza/LisPage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wstep" element={<WstepPage />} />
          <Route path="/poezja" element={<PoezjaPage />} />
          <Route path="/proza" element={<ProzaPage />} />
          <Route path="/archiwalia" element={<ArchiwaliaPage />} />
          <Route path="/recenzje" element={<RecenzjePage />} />
          <Route path="/esej" element={<EsejPage />} />
          <Route path="/varia" element={<VariaPage />} />
          <Route path="/redakcja" element={<RedakcjaPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          {/* PROZA */}
          <Route path="/waldemarbawolek" element={<WaldemarPage />} />
          <Route path="/olakolodziejek" element={<KolodziejekPage />} />
          <Route path="/grzegorzstrumyk" element={<StrumykPage />} />
          <Route path="/darekfoks" element={<FoksPage />} />
          <Route path="/romanliszolnierz" element={<LisPage />} />

          {/* VARIA */}
          <Route path="/wieslawaptaszyk" element={<PtaszykPage />} />
          <Route
            path="/wiedemannszumlewicz"
            element={<WiedemannSzumlewiczPage />}
          />
          <Route path="/zbigniewdmitroca" element={<DmitrocaPage />} />
          <Route path="/irenawiszniewska" element={<WiszniewskaPage />} />
          <Route path="/geraldfitzgibbon" element={<FitzgibbonPage />} />
          {/* ARCHIWALIA */}
          <Route path="/lukaskrajeski" element={<KrajewskiPage />} />
          <Route path="/wieslawprzybyla" element={<PrzybylaPage />} />
          <Route path="/mariannapilotowa" element={<MariannaPage />} />
          <Route path="/laure" element={<LaurePage />} />

          {/* ESEJE */}
          <Route path="/piotrskalski" element={<SkalskiPage />} />
          <Route path="/renatabozek" element={<BozekPage />} />
          <Route path="/ewaopalka" element={<OpalkaPage />} />
          <Route path="/wiktorrusin" element={<RusinPage />} />
          <Route path="/adamwiedemann" element={<WiedemannPage />} />
          <Route path="/piotrlemieszko" element={<LemieszkoPage />} />
          {/* RECENZJE */}
          <Route path="/marcinpolak" element={<PolakPage />} />
          <Route path="/jakubdabrowski" element={<DabrowskiPage />} />
          <Route path="/agatapyzik" element={<PyzikPage />} />
          <Route path="/romanlis" element={<LisRecenzjaPage />} />
          {/* Poezja */}
          <Route path="/szymonkowalski" element={<KowalskiPage />} />
          <Route path="/biankarolando" element={<RolandoPage />} />
          <Route path="/jozefkurylak" element={<KurylakPage />} />
          <Route path="/samanthakitsch" element={<KitschPage />} />
          <Route path="/filipmatwiejczuk" element={<MatwiejczukPage />} />
        </Routes>
        {/* <FooterBlack /> */}
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
