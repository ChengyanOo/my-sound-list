import React, {useState, useEffect} from "react";
import {Howl, Howler} from 'howler';

const useAudio = (url) => {
  const [audio] = useState(new Howl({
    src: [url]
  }));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;
