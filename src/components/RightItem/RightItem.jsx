import React from "react";
import "./RightItem.css";
import flower from "../../assets/right_item_flower.png";
import o from "../../assets/o.svg";
import l from "../../assets/l.svg";
import e from "../../assets/e.svg";

const RightItem = () => {
  return (
    <div className="right_item">
      <div className="right_ole">
        <img className="o_img" src={o}></img>
        <img className="l_img" src={l}></img>
        <img className="e_img" src={e}></img>
        <img className="right_img" src={flower}></img>
      </div>
    </div>
  );
};

export default RightItem;
