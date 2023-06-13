import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Przybyla from "./Przybyla";

const PrzybylaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Przybyla></Przybyla>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default PrzybylaPage;
