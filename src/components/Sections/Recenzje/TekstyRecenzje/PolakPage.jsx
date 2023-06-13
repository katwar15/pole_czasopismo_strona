import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Polak from "./Polak";

const PolakPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Polak></Polak>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default PolakPage;
