import React, { useState } from "react";
import "./Mapa.css";
import { Link } from "react-router-dom";

import wstep from "../../assets/wstep.png";
import poezja from "../../assets/poezja.png";
import proza from "../../assets/proza.png";
import archiwalia from "../../assets/archiwalia.png";
import recenzje from "../../assets/recenzje.png";
import eseistyka from "../../assets/eseistyka.png";
import varia from "../../assets/varia.png";
import wstep_hover from "../../assets/wstep_hover.png";
import poezja_hover from "../../assets/poezja_hover.png";
import proza_hover from "../../assets/proza_hover.png";
import archiwalia_hover from "../../assets/archiwalia_hover.png";
import recenzje_hover from "../../assets/recenzje_hover.png";
import esej_hover from "../../assets/esej_hover.png";
import varia_hover from "../../assets/varia_hover.png";

const Mapa = () => {
  const [isShownPoezja, setIsShownPoezja] = useState(false);
  const [isShownProza, setIsShownProza] = useState(false);
  const [isShownArchiwalia, setIsShownArchiwalia] = useState(false);
  const [isShownRecenzje, setIsShownRecenzje] = useState(false);
  const [isShownEsej, setIsShownEsej] = useState(false);
  const [isShownVaria, setIsShownVaria] = useState(false);

  return (
    <div className="main_mapa">
      <div className="mapa_wstep"></div>

      <div className="mapa_poezja">
        <Link
          to="/poezja"
          className="mapa_a"
          onMouseEnter={() => setIsShownPoezja(true)}
          onMouseLeave={() => setIsShownPoezja(false)}
        >
          {isShownPoezja ? (
            <img className="mapa_img_left" src={poezja_hover}></img>
          ) : (
            <img className="mapa_img_left" src={poezja}></img>
          )}
        </Link>
      </div>

      <div className="mapa_proza">
        <Link
          to="/proza"
          className="mapa_a"
          onMouseEnter={() => setIsShownProza(true)}
          onMouseLeave={() => setIsShownProza(false)}
        >
          {isShownProza ? (
            <img className="mapa_img" src={proza_hover}></img>
          ) : (
            <img className="mapa_img" src={proza}></img>
          )}
        </Link>
      </div>
      <div className="mapa_archiwalia">
        <Link
          to="/archiwalia"
          className="mapa_a"
          onMouseEnter={() => setIsShownArchiwalia(true)}
          onMouseLeave={() => setIsShownArchiwalia(false)}
        >
          {isShownArchiwalia ? (
            <img className="mapa_img_left" src={archiwalia_hover}></img>
          ) : (
            <img className="mapa_img_left" src={archiwalia}></img>
          )}
        </Link>
      </div>
      <div className="mapa_recenzje">
        <Link
          to="/recenzje"
          className="mapa_a"
          onMouseEnter={() => setIsShownRecenzje(true)}
          onMouseLeave={() => setIsShownRecenzje(false)}
        >
          {isShownRecenzje ? (
            <img className="mapa_img_left" src={recenzje_hover}></img>
          ) : (
            <img className="mapa_img_left" src={recenzje}></img>
          )}
        </Link>
      </div>
      <div className="mapa_eseistyka">
        <Link
          to="/esej"
          className="mapa_a"
          onMouseEnter={() => setIsShownEsej(true)}
          onMouseLeave={() => setIsShownEsej(false)}
        >
          {isShownEsej ? (
            <img className="mapa_img" src={esej_hover}></img>
          ) : (
            <img className="mapa_img" src={eseistyka}></img>
          )}
        </Link>
      </div>
      <div className="mapa_varia">
        <Link
          to="/varia"
          className="mapa_a"
          onMouseEnter={() => setIsShownVaria(true)}
          onMouseLeave={() => setIsShownVaria(false)}
        >
          {isShownVaria ? (
            <img className="mapa_img_left" src={varia_hover}></img>
          ) : (
            <img className="mapa_img_left" src={varia}></img>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Mapa;
