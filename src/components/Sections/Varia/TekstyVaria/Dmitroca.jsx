import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Dmitroca = () => {
  return (
    <div className="wstep">
      <Link to="/varia" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h2 className="h2_wstep">[Straszny dziadunio (1)]</h2>
        <h1 className="h1_wstep_autor">Zbigniew Dmitroca</h1>

        <h2 className="h1_wstep_padding">Nieproszony gość</h2>

        <div className="content_center">
          <h2 className="h2_non_indent ">
            Błąka się po całym świecie,<br></br> Wzdłuż i wszerz.<br></br> A kto
            taki? Kto to taki?<br></br> Dobrze wiesz!
          </h2>
          <h2 className="h2_non_indent ">
            Nieproszony i niechciany<br></br> W domu gość.<br></br> Zawsze
            wchodzi po kryjomu<br></br> I na złość.
          </h2>
          <h2 className="h2_non_indent ">
            Wciśnie się w najmniejszą szparę,<br></br> W każdą rzecz,<br></br> I
            nie daje się wykurzyć,<br></br> Wygnać precz.
          </h2>
          <h2 className="h2_non_indent ">
            Choć go wciągniesz odkurzaczem,<br></br> Sprytny zuch<br></br> Znów
            zakradnie się cichaczem<br></br> Niby duch!
          </h2>
          <h2 className="h2_non_indent ">
            Chociaż wytrzesz miękką ścierką<br></br> Każdy kąt,<br></br> Chociaż
            powiesz mu do słuchu:<br></br> – Zmykaj stąd!
          </h2>
          <h2 className="h2_non_indent ">
            On się tym nie przejmie wcale<br></br> I raz dwa<br></br> Znów
            pokaże ci, że czystość<br></br> W nosie ma.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dmitroca;
