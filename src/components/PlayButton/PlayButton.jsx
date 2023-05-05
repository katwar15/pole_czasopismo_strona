import { useState } from "react";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import "../PlayButton/PlayButton.css";

// import audio from "../../assets/pole_sound.mp3";

const PlayButton = ({ audioElement, isPlaying, setIsPlaying }) => {
  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <button className="button_music">
      {isPlaying ? (
        <BiVolumeMute onClick={PlayPause} />
      ) : (
        <BiVolumeFull onClick={PlayPause} />
      )}
    </button>
  );
};

export default PlayButton;
