import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(null);

  const getConfig = async () => {
    const configFilePath = "/configs/config.json";
    const response = await fetch(configFilePath);
    return await response.json();
  }

  const fetchData = async (apiOrigin) => {
    const encodedQuery = encodeURI(query);
    apiOrigin = apiOrigin.endsWith("/") ? apiOrigin : `${apiOrigin}/`
    const response = await fetch(
      `${apiOrigin}search/songs?query=${encodedQuery}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    window['earsifyCore']['config'] = await getConfig();
    const { musicApiConfig: { initialQuery = '' } } = window['earsifyCore']['config'];
    setQuery(initialQuery);
  }, []);

  useEffect(() => {
    const { musicApiConfig: { origin = '' } } = window['earsifyCore']['config'];
    fetchData(origin);
  }, [query]);

  return (
    <DataContext.Provider value={[data, setData, query, setQuery]}>
      {props.children}
    </DataContext.Provider>
  );
};
