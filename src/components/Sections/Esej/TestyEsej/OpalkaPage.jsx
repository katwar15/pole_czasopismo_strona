import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Opalka from "./Opalka";

const OpalkaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Opalka></Opalka>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default OpalkaPage;
