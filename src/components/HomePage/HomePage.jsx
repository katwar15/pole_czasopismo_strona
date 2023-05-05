import React from "react";
import "./HomePage.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightItem from "../RightItem/RightItem";
import Mapa from "../Mapa/Mapa";
import LeftMenuBlack from "../LeftMenuBlack/LeftMenuBlack";
import RightItemBlack from "../RightItemBlack/RightItemBlack";

const HomePage = () => {
  return (
    <div className="home">
      <LeftMenu />
      {/* <LeftMenuBlack /> */}
      <Mapa />
      <RightItem />
      {/* <RightItemBlack /> */}
    </div>
  );
};

export default HomePage;
