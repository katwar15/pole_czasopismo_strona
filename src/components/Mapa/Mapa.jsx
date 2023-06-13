import React from "react";
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
  return (
    <div className="main_mapa">
      <div className="mapa_wstep">
        <Link to="/wstep" className="mapa_a">
          <img className="mapa_img" src={wstep}></img>
          <div className="overlay_right">
            <img className="mapa_a_hover" src={wstep_hover}></img>
          </div>
        </Link>
      </div>

      <div className="mapa_poezja">
        <Link to="/poezja" className="mapa_a">
          <img className="mapa_img" src={poezja}></img>
          <div className="overlay">
            <img className="mapa_a_hover" src={poezja_hover}></img>
          </div>
        </Link>
      </div>

      <div className="mapa_proza">
        <Link to="/proza" className="mapa_a">
          <img className="mapa_img" src={proza}></img>
          <div className="overlay_right">
            <img className="mapa_a_hover" src={proza_hover}></img>
          </div>
        </Link>
      </div>
      <div className="mapa_archiwalia">
        <Link to="/archiwalia" className="mapa_a">
          <img className="mapa_img" src={archiwalia}></img>
          <div className="overlay">
            <img className="mapa_a_hover" src={archiwalia_hover}></img>
          </div>
        </Link>
      </div>
      <div className="mapa_recenzje">
        <Link to="/recenzje" className="mapa_a">
          <img className="mapa_img" src={recenzje}></img>
          <div className="overlay">
            <img className="mapa_a_hover" src={recenzje_hover}></img>
          </div>
        </Link>
      </div>
      <div className="mapa_eseistyka">
        <Link to="/esej" className="mapa_a">
          <img className="mapa_img" src={eseistyka}></img>
          <div className="overlay_right">
            <img className="mapa_a_hover" src={esej_hover}></img>
          </div>
        </Link>
      </div>
      <div className="mapa_varia">
        <Link to="/varia" className="mapa_a">
          <img className="mapa_img" src={varia}></img>
          <div className="overlay">
            <img className="mapa_a_hover" src={varia_hover}></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Mapa;
