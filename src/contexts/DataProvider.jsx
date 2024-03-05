import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [areConfigsLoaded, setConfigsLoading] = useState(false);
  const [data, setData] = useState();
  const [query, setQuery] = useState();

  const getConfig = async () => {
    const configFilePath = "/configs/config.json";
    const response = await fetch(configFilePath);
    return await response.json();
  }

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
    window['earsifyCore']['config'] = await getConfig();
    const { musicApiConfig: { initialQuery = '' } } = window['earsifyCore']['config'];
    setQuery(initialQuery);
    setConfigsLoading(true);
  }

  useEffect(() => {
    if (!areConfigsLoaded) {
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
