import React from "react";
import "./Mapa.css";
import wstep from "../../assets/wstep.png";
import poezja from "../../assets/poezja.png";
import proza from "../../assets/proza.png";
import archiwalia from "../../assets/archiwalia.png";
import recenzje from "../../assets/recenzje.png";
import eseistyka from "../../assets/eseistyka.png";
import varia from "../../assets/varia.png";

const Mapa = () => {
  return (
    <div className="main_mapa">
      <div className="mapa_poezja">
        <button className="mapa_button">
          <img className="mapa_img" src={wstep}></img>
        </button>
      </div>
      <div className="mapa_poezja">
        <button className="mapa_button">
          <img className="mapa_img" src={poezja}></img>
        </button>
      </div>
      <div className="mapa_proza">
        <button className="mapa_button">
          <img className="mapa_img" src={proza}></img>
        </button>
      </div>
      <div className="mapa_archiwalia">
        <button className="mapa_button">
          <img className="mapa_img" src={archiwalia}></img>
        </button>
      </div>
      <div className="mapa_recenzje">
        <button className="mapa_button">
          <img className="mapa_img" src={recenzje}></img>
        </button>
      </div>
      <div className="mapa_eseistyka">
        <button className="mapa_button">
          <img className="mapa_img" src={eseistyka}></img>
        </button>
      </div>
      <div className="mapa_varia">
        <button className="mapa_button">
          <img className="mapa_img" src={varia}></img>
        </button>
      </div>
    </div>
  );
};

export default Mapa;
