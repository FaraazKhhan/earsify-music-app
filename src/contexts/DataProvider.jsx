import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("english");
  const [isConfigLoaded, setConfigLoading] = useState(false);

  const fetchData = async () => {
    const { musicApiConfig: { origin = '' } } = window['earsifyCore']['config'];
    const apiOrigin = origin.endsWith("/") ? origin : `${origin}/`
    const encodedQuery = encodeURI(query);
    const response = await fetch(
      `${apiOrigin}search/songs?query=${encodedQuery}`
    );
    const data = await response.json();
    setData(data);
  };

  const loadConfigs = async () => {
    const response = await fetch("/configs/config.json");
    const configs = await response.json();
    console.debug({ configs })
    window.earsifyCore.config = configs;
  }

  useEffect(() => {
    if (!isConfigLoaded) {
      loadConfigs();
    }
    fetchData();
  }, [query]);

  return (
    <DataContext.Provider value={[data, setData, query, setQuery]}>
      {props.children}
    </DataContext.Provider>
  );
};
