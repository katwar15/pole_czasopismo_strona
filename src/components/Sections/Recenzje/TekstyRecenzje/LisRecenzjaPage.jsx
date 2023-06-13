import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import LisRecenzja from "./LisRecenzja";

const LisRecenzjaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <LisRecenzja></LisRecenzja>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default LisRecenzjaPage;
