import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Kolodziejek from "./Kolodziejek";

const KolodziejekPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Kolodziejek></Kolodziejek>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default KolodziejekPage;
