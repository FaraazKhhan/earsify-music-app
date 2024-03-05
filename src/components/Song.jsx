import React, { useRef, useState, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

const Song = () => {
  const [data, setData, query, setQuery] = useContext(DataContext);

  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const [activeId, setActiveId] = useState(null);

  const audio = useRef(null);

  const togglePlay = (e) => {
    const song = e.currentTarget.id;
    setActiveId(song);

    if (currentSong === song) {
      if (isPlaying) {
        audio.current.pause();
      } else {
        audio.current.play();
      }
      setPlaying(!isPlaying);
    } else {
      if (audio.current) {
        audio.current.pause();
      }

      setCurrentSong(song);
      setPlaying(true);
      audio.current = new Audio(song);
      audio.current.preload = "none";
      audio.current.play();
    }
  };

  const stopSong = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div className="results__container">
      {
        console.debug("data from api", data) &&
        data &&
        data.results.map((item) => (
          <div className="song__container active" key={item.id}>
            <picture>
              <source media="(min-width: 900px)" srcSet={item.image[2].link} />
              <source media="(min-width: 480px)" srcSet={item.image[1].link} />
              <img src={item.image[0].link} alt={item.name} className="song-image" />
            </picture>
            <div className="song-info__wrapper">
              <p className="song-title">{item.name}</p>
              <p className="song-album">
                {item.album?.name}
              </p>
              <p className="song-year">{item.year}</p>
              <p className="song-artist">{item.artist}</p>
              <button className="song-download-btn">
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </button>
            </div>
            <div className="song-btn__container">
              <button
                id={item.downloadUrl[4]?.link}
                className={
                  "toggle-btn play__btn " +
                  (activeId === item.downloadUrl[4]?.link && "active")
                }
                onClick={togglePlay}
              >
                {currentSong !== item.downloadUrl[4]?.link || !isPlaying ? (
                  <FontAwesomeIcon icon={faPlay} />
                ) : (
                  <FontAwesomeIcon icon={faPause} />
                )}
              </button>
              <button className="toggle-btn stop__btn" onClick={stopSong}>
                <FontAwesomeIcon icon={faStop} />
              </button>
            </div>
          </div>)
        )}
    </div>
  );
};

export default Song;
