import React from 'react'
import Player from './Player';
import ResultsContainer from './ResultsContainer'
import Searchbar from './Searchbar'

const HeroArea = () => {
    return (
        <main className="hero-area">
            <div className="container">
                <div className="title">
                    <h1>Search &amp; Play</h1>
                    <h2>Unlimited Indian Songs</h2>
                    <h3>Absolutely Free</h3>
                </div>
                <Player />
                <Searchbar/>
                <ResultsContainer />
            </div>
        </main>
     );
}
 
export default HeroArea;