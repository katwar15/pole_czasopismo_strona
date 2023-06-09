import React from "react";
import { Link } from "react-router-dom";
import "./VariaPage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Varia from "./Varia";
import Footer from "../../Footer/Footer";

const VariaPage = () => {
  return (
    <div className="varia_main">
      <LeftMenu />
      <Varia />
      <RightItem />
      <Footer />
    </div>
  );
};

export default VariaPage;
