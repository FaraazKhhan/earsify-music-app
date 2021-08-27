import React from "react";

import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MusicApp from "./pages/MusicApp";
// import HeroArea from "./components/HeroArea";
// import Searchbar from "./components/Searchbar";
import { DataProvider } from "./contexts/DataProvider";
// import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <DataProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/music" component={MusicApp} />
          </Switch>
          {/* <HeroArea />
          <Searchbar />
          <Song /> */}
        </DataProvider>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
