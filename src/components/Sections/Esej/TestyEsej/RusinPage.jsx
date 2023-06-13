import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Rusin from "./Rusin";

const RusinPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Rusin></Rusin>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default RusinPage;
