import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Krajewski from "./Krajewski";

const KrajewskiPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Krajewski></Krajewski>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default KrajewskiPage;
