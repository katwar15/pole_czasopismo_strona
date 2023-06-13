import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Dmitroca from "./Dmitroca";

const DmitrocaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Dmitroca></Dmitroca>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default DmitrocaPage;
