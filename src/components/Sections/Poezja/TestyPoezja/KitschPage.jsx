import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Kitsch from "./Kitsch";

const KitschPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Kitsch></Kitsch>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default KitschPage;
