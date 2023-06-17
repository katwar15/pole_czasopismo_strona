import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Laure from "./Laure";

const LaurePage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Laure></Laure>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default LaurePage;
