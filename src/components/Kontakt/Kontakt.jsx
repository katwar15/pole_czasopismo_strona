import React from "react";
import { Link } from "react-router-dom";
import "./Kontakt.css";
import forward_button from "../../../src/assets/forward_button.svg";
import kontakt from "../../../src/assets/kontakt.jpg";

const Kontakt = () => {
  return (
    <div className="kontakt">
      <Link to="/" className="forward_button_kontakt">
        <img className="forward_img_kontakt" src={forward_button}></img>
      </Link>
      <div className="content_kontakt">
        <div className="img_anna_kontakt">
          <img className="kontakt_img" src={kontakt}></img>
          <p className="p_kontakt">rys. Anna Baumgart</p>
        </div>
        <h1 className="h1_kontakt_pole">Pole. Dwumiesięcznik literacki</h1>
        <h1 className="h1_kontakt">Szefowie działów:</h1>
        <h2 className="h2_kontakt">Renata Bożek (proza): 1r.bozek@gmail.com</h2>
        <h2 className="h2_kontakt">
          Piotr Skalski (esej): pskalski@outlook.com
        </h2>
        <h2 className="h2_kontakt">
          Adam Wiedemann (poezja): adamwiedemann@hotmail.com
        </h2>
        <h3 className="h3_kontakt">
          Rozpatrujemy wyłącznie teksty przesyłane w formacie .doc(x), .odt lub
          .rtf. Prosimy o nadawanie plikom nazw według schematu:
          nazwisko_tytuł_tekstu.
        </h3>
      </div>
    </div>
  );
};

export default Kontakt;
