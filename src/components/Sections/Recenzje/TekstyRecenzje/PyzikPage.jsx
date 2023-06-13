import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Pyzik from "./Pyzik";

const PyzikPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Pyzik></Pyzik>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default PyzikPage;
