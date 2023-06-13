import React from "react";
import { Link } from "react-router-dom";
import "./KontaktPage.css";
import LeftMenuBlack from "../LeftMenuBlack/LeftMenuBlack";
import RightItemBlack from "../RightItemBlack/RightItemBlack";
import Kontakt from "./Kontakt";
import FooterBlack from "../FooterBlack/FooterBlack";

const KontaktPage = () => {
  return (
    <div className="kontakt_page">
      <LeftMenuBlack />
      <Kontakt />
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default KontaktPage;
