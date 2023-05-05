import React from "react";
import "./RightItemBlack.css";
import o_black from "../../assets/o_black.svg";
import l_black from "../../assets/l_black.svg";
import e_black from "../../assets/e_black.svg";

const RightItemBlack = () => {
  return (
    <div className="right_item_black">
      <div className="right_ole_black">
        <img className="o_img_black" src={o_black}></img>
        <img className="l_img_black" src={l_black}></img>
        <img className="e_img_black" src={e_black}></img>
      </div>
    </div>
  );
};

export default RightItemBlack;
