import React from "react";
import { Link } from "react-router-dom";
import "./Wstep.css";
import forward_button from "../../../assets/forward_button.svg";

const Wstep = () => {
  return (
    <div className="wstep">
      <Link to="/" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep">Redaguje zespół</h1>
        <h2 className="h2_wstep">
          Renata Bożek, Piotr Skalski, Adam Wiedemann
        </h2>
        <h1 className="h1_wstep">Opracowanie graficzne</h1>
        <h2 className="h2_wstep">Paulina Zielona</h2>
        <h1 className="h1_wstep">Konstrukcja i opieka nad stroną</h1>
        <h2 className="h2_wstep">Katarzyna Warmuz</h2>
      </div>
    </div>
  );
};

export default Wstep;
