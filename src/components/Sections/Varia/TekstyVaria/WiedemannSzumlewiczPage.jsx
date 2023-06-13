import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import WiedemannSzumlewicz from "./WiedemannSzumlewicz";

const WiedemannSzumlewiczPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <WiedemannSzumlewicz></WiedemannSzumlewicz>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default WiedemannSzumlewiczPage;
