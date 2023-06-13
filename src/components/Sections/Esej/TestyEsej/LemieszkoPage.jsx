import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Lemieszko from "./Lemieszko";

const LemieszkoPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Lemieszko></Lemieszko>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default LemieszkoPage;
