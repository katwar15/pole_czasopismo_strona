import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Marianna from "./Marianna";

const MariannaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Marianna></Marianna>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default MariannaPage;
