import React from "react";
import { Link } from "react-router-dom";
import "./Redakcja.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";

const PoezjaPage = () => {
  return (
    <div className="redakcja">
      <LeftMenu />
      <RightItem />
    </div>
  );
};

export default PoezjaPage;
