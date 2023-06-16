import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Rolando from "./Rolando";

const RolandoPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Rolando></Rolando>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default RolandoPage;
