import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Dabrowski from "./Dabrowski";

const DabrowskiPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Dabrowski></Dabrowski>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default DabrowskiPage;
