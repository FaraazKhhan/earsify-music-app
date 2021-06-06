import React from "react";

import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Searchbar from "./components/Searchbar";
import SongList from "./components/SongList";
import { DataProvider } from "./contexts/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <HeroArea />
        <Searchbar />
        <SongList />
      </DataProvider>
    </div>
  );
}

export default App;
