import React from "react";
import { Link } from "react-router-dom";
import "./EsejPage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Esej from "./Esej";
import Footer from "../../Footer/Footer";

const EsejPage = () => {
  return (
    <div className="esej_main">
      <LeftMenu />
      <Esej />
      <RightItem />
      <Footer />
    </div>
  );
};

export default EsejPage;
