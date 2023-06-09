import React from "react";
import { Link } from "react-router-dom";
import "./Redakcja.css";
import forward_button from "../../../src/assets/forward_button.svg";
import redakcja from "../../../src/assets/redakcja.jpg";

const Redakcja = () => {
  return (
    <div className="redakcja">
      <Link to="/" className="forward_button_redakcja">
        <img className="forward_img_redakcja" src={forward_button}></img>
      </Link>
      <div className="content">
        <div className="img_anna">
          <img className="redakcja_img" src={redakcja}></img>
          <p className="p_redakcja">rys. Anna Baumgart</p>
        </div>

        <h1 className="h1_redakcja">Redaguje zespół</h1>
        <h2 className="h2_redakcja">
          Renata Bożek, Piotr Skalski, Adam Wiedemann
        </h2>
        <h1 className="h1_redakcja">Opracowanie graficzne</h1>
        <h2 className="h2_redakcja">Paulina Zielona</h2>
        <h1 className="h1_redakcja">Konstrukcja i opieka nad stroną</h1>
        <h2 className="h2_redakcja">Katarzyna Warmuz</h2>
      </div>
    </div>
  );
};

export default Redakcja;
