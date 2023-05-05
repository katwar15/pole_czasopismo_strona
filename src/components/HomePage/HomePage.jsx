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
      <LeftMenu className="home_left_menu" />
      {/* <LeftMenuBlack className="home_left_menu" /> */}
      <Mapa className="home_main" />
      <RightItem className="home_right_menu" />
      {/* <RightItemBlack className="home_right_menu" /> */}
    </div>
  );
};

export default HomePage;
