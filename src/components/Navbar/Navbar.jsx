import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import {
  BiMenu,
  BiX,
  BiArchive,
  BiMailSend,
  BiMaleFemale,
} from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="numer_czasopisma">
          <ul>
            <li>
              <h1 className="pole_numer">
                <b>Pole</b> / <b>Nr </b> 1 / 2023
              </h1>
            </li>
          </ul>
        </Link>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <Link to="/" className="show_menu_logo">
            <ul>
              <li>
                <h1 className="pole_numer">Pole / Nr 1 / 2023</h1>
              </li>
            </ul>
          </Link>
          <ul className="nav_list">
            <li className="nav_item">
              <Link
                to="/redakcja"
                className="nav_link"
                onClick={() => showMenu(false)}
              >
                Redakcja
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/kontakt"
                className="nav_link"
                onClick={() => showMenu(false)}
              >
                Kontakt
              </Link>
            </li>
            <li className="facebook_item">
              <Link
                className="nav_link"
                to="https://www.facebook.com/profile.php?id=100090668847272"
              >
                <FaFacebook />
              </Link>
            </li>
          </ul>
          <i className="nav_close" onClick={() => showMenu(!toggle)}>
            <BiX />
          </i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <BiMenu />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
