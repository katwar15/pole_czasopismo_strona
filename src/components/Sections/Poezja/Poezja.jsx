import React from "react";
import { Link } from "react-router-dom";
import "./Poezja.css";
import LeftMenu from "../../LeftMenu/LeftMenu";
import RightItem from "../../RightItem/RightItem";
import poezja_main from "../../../assets/poezja_main.png";
import forward_button from "../../../assets/forward_button.svg";
import dot_black from "../../../assets/dot_black.svg";

const Poezja = () => {
  return (
    <div className="poezja_section">
      <a className="forward_button">
        <img className="forward_img" src={forward_button}></img>
      </a>
      {/* <div className="poezja_poets_one">
        <a className="poeta_1">
          <img className="dot_black" src={dot_black}></img>
        </a>
        <a className="poeta_2">
          <img className="dot_black" src={dot_black}></img>
        </a>
      </div>
      <div className="poezja_poets_two">
        <a className="poeta_3">
          <img className="dot_black" src={dot_black}></img>
        </a>
        <a className="poeta_4">
          <img className="dot_black" src={dot_black}></img>
        </a>
        <a className="poeta_5">
          <img className="dot_black" src={dot_black}></img>
        </a>
      </div> */}

      <img className="poezja_img" src={poezja_main} useMap="#image-map">
        {" "}
      </img>
      <map name="image-map">
        <area
          target=""
          alt=""
          title=""
          href="link1"
          coords="690,1021,NaN"
          shape="circle"
        ></area>
        <area
          target=""
          alt=""
          title=""
          href="link2"
          coords="1072,846,NaN"
          shape="circle"
        ></area>
        <area
          target=""
          alt=""
          title=""
          href="lnk3"
          coords="1577,514,NaN"
          shape="circle"
        ></area>
        <area
          target=""
          alt=""
          title=""
          href="link4"
          coords="1639,971,NaN"
          shape="circle"
        ></area>
        <area
          target=""
          alt=""
          title=""
          href="link5"
          coords="1439,1151,NaN"
          shape="circle"
        ></area>
      </map>
    </div>
  );
};

export default Poezja;
