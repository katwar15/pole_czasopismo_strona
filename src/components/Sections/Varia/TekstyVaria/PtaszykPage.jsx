import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Ptaszyk from "./Ptaszyk";

const PtaszykPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Ptaszyk></Ptaszyk>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default PtaszykPage;
