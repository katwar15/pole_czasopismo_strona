import React, { useState } from "react";
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
        <a href="" className="numer_czasopisma">
          <ul>
            <li>
              <h1>Pole</h1>
            </li>
            <li>
              <h1>Dwumiesięcznik</h1>
            </li>
          </ul>
        </a>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <a href="" className="show_menu_logo">
            <ul>
              <li>
                <h1>Pole</h1>
              </li>
              <li>
                <h1>Dwumiesięcznik</h1>
              </li>
            </ul>
          </a>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="" className="nav_link">
                Archiwalia
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link">
                Redakcja
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link">
                Kontakt
              </a>
            </li>
            <li className="facebook_item">
              <a
                className="nav_link"
                href="https://www.facebook.com/profile.php?id=100090668847272"
              >
                <FaFacebook />
              </a>
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
