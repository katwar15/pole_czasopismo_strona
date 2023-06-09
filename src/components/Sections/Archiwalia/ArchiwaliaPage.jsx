import React from "react";
import { Link } from "react-router-dom";
import "./ArchiwaliaPage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Archiwalia from "./Archiwalia";
import Footer from "../../Footer/Footer";

const ArchiwaliaPage = () => {
  return (
    <div className="archiwalia_main">
      <LeftMenu />
      <Archiwalia />
      <RightItem />
      <Footer />
    </div>
  );
};

export default ArchiwaliaPage;
