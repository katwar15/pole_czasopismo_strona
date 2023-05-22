import React from "react";
import { Link } from "react-router-dom";
import "./RecenzjePage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Recenzje from "./Recenzje";

const RecenzjePage = () => {
  return (
    <div className="recenzje_main">
      <LeftMenu />
      <Recenzje />
      <RightItem />
    </div>
  );
};

export default RecenzjePage;
