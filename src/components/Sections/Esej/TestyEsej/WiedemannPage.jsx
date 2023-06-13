import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Wiedemann from "./Wiedemann";

const WiedemannPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Wiedemann></Wiedemann>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default WiedemannPage;
