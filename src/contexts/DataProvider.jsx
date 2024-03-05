import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("english");
  // const [isConfigLoaded, setConfigLoading] = useState(false);

  const fetchData = async () => {
    // const { musicApiConfig: { origin = '' } } = window['earsifyCore']['config'];
    // const apiOrigin = origin.endsWith("/") ? origin : `${origin}/`
    const apiOrigin = "https://jiosaavn-api-fvrvz.vercel.app/";
    const encodedQuery = encodeURI(query);
    const response = await fetch(
      `${apiOrigin}search/songs?query=${encodedQuery}`
    );
    const data = await response.json();
    console.debug("Data:: from API", data)
    setData(data);
  };

  // const loadConfigs = async () => {
  //   let config;
  //   if (!isConfigLoaded) {
  //     const response = await fetch("/configs/config.json");
  //     config = await response.json();
  //     window.earsifyCore = { config };
  //     setConfigLoading(true);
  //   }
  //   console.debug({ config })
  // }

  useEffect(() => {
    // loadConfigs().then(() => fetchData());
    fetchData();
  }, [query]);

  return (
    <DataContext.Provider value={[data, setData, query, setQuery]}>
      {props.children}
    </DataContext.Provider>
  );
};
