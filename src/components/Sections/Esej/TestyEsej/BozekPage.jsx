import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Bozek from "./Bozek";

const BozekPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Bozek></Bozek>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default BozekPage;
