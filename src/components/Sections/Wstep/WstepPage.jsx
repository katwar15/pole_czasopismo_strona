import React from "react";
import { Link } from "react-router-dom";
import "./WstepPage.css";
import Footer from "../../Footer/Footer";
import Wstep from "./Wstep";
import LeftMenuBlack from "../../LeftMenuBlack/LeftMenuBlack";
import RightItemBlack from "../../RightItemBlack/RightItemBlack";
import FooterBlack from "../../FooterBlack/FooterBlack";

const VariaPage = () => {
  return (
    <div className="wstep_main">
      <LeftMenuBlack />
      <Wstep />
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default VariaPage;
