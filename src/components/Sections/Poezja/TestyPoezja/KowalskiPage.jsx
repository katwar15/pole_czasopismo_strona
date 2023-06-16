import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Kowalski from "./Kowalski";

const KowalskiPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Kowalski></Kowalski>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default KowalskiPage;
