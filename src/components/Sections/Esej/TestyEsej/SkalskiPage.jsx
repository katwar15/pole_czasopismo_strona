import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Skalski from "./Skalski";

const SkalskiPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Skalski></Skalski>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default SkalskiPage;
