import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Matwiejczuk from "./Matwiejczuk";

const MatwiejczukPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Matwiejczuk></Matwiejczuk>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default MatwiejczukPage;
