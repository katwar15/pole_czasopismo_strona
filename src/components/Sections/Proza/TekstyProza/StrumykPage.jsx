import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Strumyk from "./Strumyk";

const StrumykPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Strumyk></Strumyk>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default StrumykPage;
