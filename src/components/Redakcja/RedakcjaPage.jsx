import React from "react";
import { Link } from "react-router-dom";
import "./RedakcjaPage.css";
import LeftMenuBlack from "../LeftMenuBlack/LeftMenuBlack";
import RightItemBlack from "../RightItemBlack/RightItemBlack";
import Redakcja from "./Redakcja";
import FooterBlack from "../FooterBlack/FooterBlack";

const RedakcjaPage = () => {
  return (
    <div className="redakcja_page">
      <LeftMenuBlack />
      <Redakcja />
      <RightItemBlack />
      <FooterBlack />
    </div>
  );
};

export default RedakcjaPage;
