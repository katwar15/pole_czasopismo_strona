import React from "react";
import { Link } from "react-router-dom";
import "./WstepPage.css";
import Wstep from "./Wstep";
import FooterBlack from "../../FooterBlack/FooterBlack";
import RightItemBlack from "../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../LeftMenuBlack/LeftMenuBlack";

const WstepPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Wstep />
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default WstepPage;
