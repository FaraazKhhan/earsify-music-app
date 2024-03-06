import React, { useState, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

const Song = () => {
  const [
    data,
    setCurrentSongPayload,
    isPlaying,
    stopAudio,
    audioRef,
    playAudio,
    pauseAudio
  ] = useContext(DataContext);
  const [activeSongId, setActiveSongId] = useState(null);

  const togglePlay = (song) => {
    const { link = '' } = song.downloadUrl[4];
    setActiveSongId(link);

    if (activeSongId === link) {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    } else {
      if (audioRef.current) {
        pauseAudio();
      }

      const payload = {
        details: song,
        stream: new Audio(link)
      }

      setCurrentSongPayload(payload);
      audioRef.current = payload.stream;
      audioRef.current.preload = "none";
      playAudio();
    }
  };

  return (
    <>
      {
        data &&
        (<div className="results__container">
          {
            data.data.results.map((song, index) => (
              <div className={"song__container " + (activeSongId === song.downloadUrl[4]?.link && "active")} key={index}>
                <picture>
                  <source media="(min-width: 900px)" srcSet={song.image[2].link} />
                  <source media="(min-width: 480px)" srcSet={song.image[1].link} />
                  <img src={song.image[0].link} alt={song.name} className="song-image" />
                </picture>
                <div className="song-info__wrapper">
                  <p className="song-title">{song.name}</p>
                  <p className="song-album">
                    {song.album?.name}
                  </p>
                  <p className="song-year">{song.year}</p>
                  <p className="song-artist">{song.artist}</p>
                  <button className="song-download-btn">
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  </button>
                </div>
                <div className="song-btn__container">
                  <button
                    id={song.downloadUrl[4]?.link}
                    className={
                      "toggle-btn play__btn " +
                      (activeSongId === song.downloadUrl[4]?.link && "active")
                    }
                    onClick={() => togglePlay(song)}
                  >
                    {activeSongId !== song.downloadUrl[4]?.link || !isPlaying ? (
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
        </div>)
      }
    </>
  );
};

export default Song;
