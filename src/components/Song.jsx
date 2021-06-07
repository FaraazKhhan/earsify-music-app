import React, { useRef, useState, useEffect, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

const Song = () => {
  const [data, setData, query, setQuery] = useContext(DataContext);

  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const audio = useRef(null);

  const togglePlay = (e) => {
    const song = e.currentTarget.id;

    if (currentSong === song) {
      // isPlaying ? audio.current.pause() : audio.current.play();
      if (isPlaying) {
        audio.current.pause();
        e.currentTarget.classList.remove("active");
        console.log(e.currentTarget.classList);
      } else {
        audio.current.play();
        e.currentTarget.classList.add("active");
        console.log(e.currentTarget.classList);
      }
      setPlaying(!isPlaying);
    } else {
      if (audio.current) {
        audio.current.pause();
      }

      setCurrentSong(song);
      setPlaying(true);
      audio.current = new Audio(song);
      audio.current.play();
    }
  };

  const stopSong = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.addEventListener("ended", () => setPlaying(false));
    }

    return () => {
      if (audio.current) {
        audio.current.removeEventListener("ended", () => setPlaying(false));
      }
    };
  }, []);

  return (
    <div className="results__container">
      {data &&
        data.map((item) => (
          <div className="song__container active" key={item.song_id}>
            <img
              src={item.song_image}
              alt={item.song_name}
              className="song-image"
            />
            <div className="song-info__wrapper">
              <p className="song-title">{item.song_name}</p>
              <p className="song-album">
                {item.album_name} <span className="song-year">{item.year}</span>
              </p>
              <p className="song-artist">{item.song_artist}</p>
              <button className="song-download-btn">
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </button>
            </div>
            <div className="song-btn__container">
              <button
                id={item.download_links[0]}
                className="toggle-btn play__btn"
                onClick={togglePlay}
              >
                {currentSong !== item.download_links[0] || !isPlaying ? (
                  <FontAwesomeIcon icon={faPlay} />
                ) : (
                  <FontAwesomeIcon icon={faPause} />
                )}
              </button>
              <button className="toggle-btn stop__btn" onClick={stopSong}>
                <FontAwesomeIcon icon={faStop} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Song;
