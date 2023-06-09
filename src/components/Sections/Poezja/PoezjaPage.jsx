import React from "react";
import { Link } from "react-router-dom";
import "./PoezjaPage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Poezja from "../Poezja/Poezja";
import Footer from "../../Footer/Footer";

const PoezjaPage = () => {
  return (
    <div className="poezja_main">
      <LeftMenu />
      <Poezja />
      <RightItem className="right" />
      <Footer />
    </div>
  );
};

export default PoezjaPage;
