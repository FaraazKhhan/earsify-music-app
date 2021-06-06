import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

const Song = ({ title, album, albumArt, artist, year, link }) => {
  return (
    <div className="song__container active">
      <img src={albumArt} alt="song album-art" className="song-image" />
      <div className="song-info__wrapper">
        <p className="song-title">{title}</p>
        <p className="song-album">
          {album} <span className="song-year">{year}</span>
        </p>
        <p className="song-artist">{artist}</p>
        <button className="song-download-btn">
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </button>
      </div>
      <audio
        src={link}
        preload="metadata"
        controls
        controlsList="nodownload"
      ></audio>
    </div>
  );
};

export default Song;
