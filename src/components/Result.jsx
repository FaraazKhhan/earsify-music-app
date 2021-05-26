import React from 'react'
import albumArt from '../assets/images/dummy_album-art.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'

const Result = () => {

    return ( 
        <div className="song__container">
            <img src={ albumArt } alt="song album-art" className="song-image" />
            <div className="song-info__wrapper">
                <p className="song-title">Tum Ho</p>
                <p className="song-album">Rockstar</p>
                <p className="song-artist">Mohit Chauhan, Arijit Singh</p>
                <p className="song-year">2011</p>
            </div>
            <button className="song-download-btn">
                <FontAwesomeIcon icon={ faArrowAltCircleDown } />
            </button>
        </div>
     );
}
 
export default Result;