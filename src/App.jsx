import React from "react";

import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Searchbar from "./components/Searchbar";
import { DataProvider } from "./contexts/DataProvider";
import Song from "./components/Song";

function App() {
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
