import React from 'react'
import Player from './Player';
import ResultsContainer from './ResultsContainer'
import Searchbar from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'

const HeroArea = () => {
    return (
        <main className="hero-area">
            <i><FontAwesomeIcon icon={ faHeadphonesAlt } /></i>
            <div className="container">
                <div className="title">
                    <h3>Listen to your favourite songs</h3>
                    <div className="main-title">
                        <h1>Earsify</h1>
                        <h2>your ears anywhere</h2>
                    </div>
                    <h3>Absolutely FREE of cost</h3>
                </div>
                <Player />
                <Searchbar/>
                <ResultsContainer />
            </div>
        </main>
     );
}
 
export default HeroArea;