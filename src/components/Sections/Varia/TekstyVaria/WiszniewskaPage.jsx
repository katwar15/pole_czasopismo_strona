import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/WstepPage.css";
import FooterBlack from "../../../FooterBlack/FooterBlack";
import RightItemBlack from "../../../RightItemBlack/RightItemBlack";
import LeftMenuBlack from "../../../LeftMenuBlack/LeftMenuBlack";
import Wiszniewska from "./Wiszniewska";

const WiszniewskaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Wiszniewska></Wiszniewska>
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default WiszniewskaPage;
