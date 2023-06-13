import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Waldemar from "./Bawolek";

const WaldemarPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Waldemar></Waldemar>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default WaldemarPage;
