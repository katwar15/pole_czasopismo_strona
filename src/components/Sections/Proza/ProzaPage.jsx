import React from "react";
import { Link } from "react-router-dom";
import "./ProzaPage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Proza from "./Proza";

const ProzaPage = () => {
  return (
    <div className="proza_main">
      <LeftMenu />
      <Proza />
      <RightItem />
    </div>
  );
};

export default ProzaPage;
