import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Kurylak from "./Kurylak";

const KurylakPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Kurylak></Kurylak>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default KurylakPage;
