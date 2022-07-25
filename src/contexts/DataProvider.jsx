import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("english");

  const fetchData = async () => {
    const encodedQuery = encodeURI(query);
    const response = await fetch(
      `https://saavn.me/search/songs?query=${encodedQuery}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <DataContext.Provider value={[data, setData, query, setQuery]}>
      {props.children}
    </DataContext.Provider>
  );
};
