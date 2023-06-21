import React, { useState, useEffect, useRef } from "react";
import "./LeftMenuBlack.css";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import logoBlack from "../../assets/p_black.png";
import audio from "../../assets/pole_sound.mp3";
import PlayButton from "../PlayButton/PlayButton";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logoBlack} className="logo_black"></img>
        </Link>

        <div className="left_menu_list_black">
          <ul>
            <li className="left_menu_item_black">
              <Link to="/wstep" className="left_menu_link_black">
                wstęp
              </Link>
            </li>
            <li className="left_menu_item_black">
              <Link to="/poezja" className="left_menu_link_black">
                poezja
              </Link>
            </li>
            <li className="left_menu_item_black">
              <Link to="/proza" className="left_menu_link_black">
                proza
              </Link>
            </li>
            <li className="left_menu_item_black">
              <Link to="/archiwalia" className="left_menu_link_black">
                archiwalia
              </Link>
            </li>
            <li className="left_menu_item_black">
              <Link to="/recenzje" className="left_menu_link_black">
                recenzje
              </Link>
            </li>
            <li className="left_menu_item_black">
              <Link to="/esej" className="left_menu_link_black">
                esej
              </Link>
            </li>
            <li className="left_menu_item_black">
              <Link to="/varia" className="left_menu_link_black">
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
export default LeftMenuBlack;
