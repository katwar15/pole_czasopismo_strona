import React, { useState, useEffect, useRef } from "react";
import "./LeftMenu.css";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import logo from "../../assets/pole_logo.png";
import audio from "../../assets/pole_sound.mp3";
import PlayButton from "../PlayButton/PlayButton";

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
              <a href="" className="left_menu_link">
                poezja
              </a>
            </li>
            <li className="left_menu_item">
              <a href="" className="left_menu_link">
                proza
              </a>
            </li>
            <li className="left_menu_item">
              <a href="" className="left_menu_link">
                archiwalia
              </a>
            </li>
            <li className="left_menu_item">
              <a href="" className="left_menu_link">
                recenzje
              </a>
            </li>
            <li className="left_menu_item">
              <a href="" className="left_menu_link">
                esej
              </a>
            </li>
            <li className="left_menu_item">
              <a href="" className="left_menu_link">
                varia
              </a>
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
