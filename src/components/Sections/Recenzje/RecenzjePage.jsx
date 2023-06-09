import React from "react";
import { Link } from "react-router-dom";
import "./RecenzjePage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Recenzje from "./Recenzje";
import Footer from "../../Footer/Footer";

const RecenzjePage = () => {
  return (
    <div className="recenzje_main">
      <LeftMenu />
      <Recenzje />
      <RightItem />
      <Footer />
    </div>
  );
};

export default RecenzjePage;
