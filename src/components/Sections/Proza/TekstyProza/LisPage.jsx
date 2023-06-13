import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Lis from "./Lis";

const FoksPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Lis></Lis>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default FoksPage;
