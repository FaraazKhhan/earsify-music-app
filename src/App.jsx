import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Searchbar from "./components/Searchbar";
import { DataProvider } from "./contexts/DataProvider";
import Song from "./components/Song";

function App() {
  const loadConfigs = async () => {
    const response = await fetch("/configs/config.json");
    window.earsifyCore.config = await response.json();
  }

  useEffect(() => {
    loadConfigs();
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
