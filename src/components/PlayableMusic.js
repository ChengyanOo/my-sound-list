import React, { useRef, useState } from "react";

const PlayableMusic = ({ name, date, uri }) => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  function toggleAudio() {
    if (play) {
      audioRef.current?.pause();
      setPlay(false);
    } else {
        audioRef.current?.play();
        setPlay(true);
    }
  }

  return (
    <div className="m-2 cursor-pointer font-medium">
      
      <button onClick={toggleAudio}>{name}</button>
      <audio ref={audioRef} src={uri} controls/>
    </div>
  );
};

export default PlayableMusic;
