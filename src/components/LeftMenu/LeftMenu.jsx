import React, { useState, useEffect, useRef } from "react";
import "./LeftMenu.css";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import logo from "../../assets/pole_logo.png";
import audio from "../../assets/pole_sound.mp3";
import PlayButton from "../PlayButton/PlayButton";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="left_menu">
      <div className="left_menu_container">
        <img src={logo} className="logo"></img>

        <div className="left_menu_list">
          <ul>
            <li className="left_menu_item">
              <Link to="/wstep" className="left_menu_link">
                wstęp
              </Link>
            </li>
            <li className="left_menu_item">
              <Link to="/poezja" className="left_menu_link">
                poezja
              </Link>
            </li>
            <li className="left_menu_item">
              <Link to="/proza" className="left_menu_link">
                proza
              </Link>
            </li>
            <li className="left_menu_item">
              <Link to="/archiwalia" className="left_menu_link">
                archiwalia
              </Link>
            </li>
            <li className="left_menu_item">
              <Link to="/recenzje" className="left_menu_link">
                recenzje
              </Link>
            </li>
            <li className="left_menu_item">
              <Link to="/esej" className="left_menu_link">
                esej
              </Link>
            </li>
            <li className="left_menu_item">
              <Link to="/varia" className="left_menu_link">
                varia
              </Link>
            </li>
            <li>
              <audio src={audio} ref={audioElement}></audio>

              <PlayButton
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioElement={audioElement}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LeftMenu;
