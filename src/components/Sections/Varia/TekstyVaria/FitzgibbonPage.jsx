import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Fitzgibbon from "./Fitzgibbon";

const FitzgibbonPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Fitzgibbon></Fitzgibbon>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default FitzgibbonPage;
