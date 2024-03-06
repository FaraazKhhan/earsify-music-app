import React, { useState, useEffect, createContext, useRef } from "react";

export const DataContext = createContext();

const getLastPlayedSong = () => {
  const song = localStorage.getItem('lastPlayedSong');
  if (song) {
    return JSON.parse(song);
  }
  return null;
}

export const DataProvider = (props) => {
  const [data, setData] = useState();
  const [query, setQuery] = useState(" ");
  const [isConfigLoaded, setConfigLoading] = useState(false);
  const [currentSongPayload, setCurrentSongPayload] = useState(getLastPlayedSong());
  const [isPlaying, setPlaying] = useState(false);

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const fetchData = async () => {
    const { musicApiConfig: { origin = '' } } = window['earsifyCore']['config'];
    const apiOrigin = origin.endsWith("/") ? origin : `${origin}/`
    // const apiOrigin = "https://jiosaavn-api-fvrvz.vercel.app/";
    const encodedQuery = encodeURI(query);
    const response = await fetch(
      `${apiOrigin}search/songs?query=${encodedQuery}`
    );
    const data = await response.json();
    console.debug("Data:: from API", data)
    setData(data);
  };

  const loadConfigs = async () => {
    let config;
    if (!isConfigLoaded) {
      const response = await fetch("/configs/config.json");
      config = await response.json();
      window.earsifyCore = { config };
      setConfigLoading(true);
    }
    console.debug({ earsifyConfig: config })
  }

  const playAudio = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const stopAudio = () => {
    pauseAudio();
    audio.current.currentTime = 0;
    setCurrentTime(0)
  }

  const handleProgress = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  useEffect(() => {
    loadConfigs().then(() => fetchData());
  }, [query]);

  useEffect(() => {
    localStorage.setItem('lastPlayedSong', JSON.stringify(currentSongPayload))
  }, [currentSongPayload])

  return (
    <DataContext.Provider value={[
      data,
      query,
      setQuery,
      currentSongPayload,
      setCurrentSongPayload,
      isPlaying,
      audioRef,
      currentTime,
      playAudio,
      pauseAudio,
      stopAudio
    ]}>
      {props.children}
    </DataContext.Provider>
  );
};
