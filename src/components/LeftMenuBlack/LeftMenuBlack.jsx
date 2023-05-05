import React, { useState, useEffect, useRef } from "react";
import "./LeftMenuBlack.css";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import logoBlack from "../../assets/p_black.png";
import audio from "../../assets/pole_sound.mp3";
import PlayButton from "../PlayButton/PlayButton";

const LeftMenuBlack = () => {
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
    <div className="left_menu_black">
      <div className="left_menu_container">
        <img src={logoBlack} className="logo_black"></img>

        <div className="left_menu_list_black">
          <ul>
            <li className="left_menu_item_black">
              <a href="" className="left_menu_link_black">
                poezja
              </a>
            </li>
            <li className="left_menu_item_black">
              <a href="" className="left_menu_link_black">
                proza
              </a>
            </li>
            <li className="left_menu_item_black">
              <a href="" className="left_menu_link_black">
                archiwalia
              </a>
            </li>
            <li className="left_menu_item_black">
              <a href="" className="left_menu_link_black">
                recenzje
              </a>
            </li>
            <li className="left_menu_item_black">
              <a href="" className="left_menu_link_black">
                esej
              </a>
            </li>
            <li className="left_menu_item_black">
              <a href="" className="left_menu_link_black">
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
export default LeftMenuBlack;
