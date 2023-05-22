import React from "react";
import { Link } from "react-router-dom";
import "./PoezjaPage.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import Poezja from "../Poezja/Poezja";

const PoezjaPage = () => {
  return (
    <div className="poezja_main">
      <LeftMenu />
      <Poezja />
      <RightItem />
    </div>
  );
};

export default PoezjaPage;
