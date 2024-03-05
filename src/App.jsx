import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Searchbar from "./components/Searchbar";
import { DataProvider } from "./contexts/DataProvider";
import Song from "./components/Song";

function App() {
  const [areConfigsLoaded, setConfigsLoading] = useState(false);

  const getConfig = async () => {
    const configFilePath = "/configs/config.json";
    const response = await fetch(configFilePath);
    return await response.json();
  }

  const loadConfigs = async () => {
    window['earsifyCore']['config'] = await getConfig();
    setConfigsLoading(true);
  }

  useEffect(() => {
    if (!areConfigsLoaded) {
      loadConfigs();
    }
  }, [])

  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <HeroArea />
        <Searchbar />
        <Song />
      </DataProvider>
    </div>
  );
}

export default App;
