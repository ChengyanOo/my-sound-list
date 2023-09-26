import React from "react";
import PlayableMusic from "./PlayableMusic";

const MyAlbum = () => {
  const playList = [
    {
      songName: "Wonderful Tonight",
      recordDate: "9/25/2023",
      uri: "/audios/Wonderful-tonight.mp3",
    },
    {
      songName: "You’re Gonna Live Forever in Me",
      recordDate: "9/25/2023",
      uri: "/audios/You’re-Gonna-Live-Forever-in-Me.mp3",
    },
    {
      songName: "Moon River",
      recordDate: "9/25/2023",
      uri: "/audios/Moon-River.mp3",
    },
    {
      songName: "南方姑娘",
      recordDate: "9/256/2023",
      uri: "/audios/南方姑娘.mp3",
    },
    {
      songName: "Perfect",
      recordDate: "9/26/2023",
      uri: "/audios/Perfect.mp3",
    },
    {
      songName: "Hallelujah",
      recordDate: "9/26/2023",
      uri: "/audios/Hallelujah.mp3",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      {playList.map((el) => {
        console.log(el.uri);
        return (
          <PlayableMusic
            key={el.songName}
            name={el.songName}
            date={el.recordDate}
            uri={el.uri}
          />
        );
      })}
    </div>
  );
};

export default MyAlbum;
