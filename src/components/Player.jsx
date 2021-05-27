import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faPlay,
    faStop,
    faStepBackward,
    faStepForward
} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return ( 
        <div className="player">
            <button className="play-btn active">
                <FontAwesomeIcon icon={ faPlay } />
            </button>
            <div className="other-btn__wrapper">
                <button className="stop-btn">
                    <FontAwesomeIcon icon={ faStop } />
                </button>
                <button className="previous-btn">
                    <FontAwesomeIcon icon={ faStepBackward } />
                </button>
                <button className="next-btn">
                    <FontAwesomeIcon icon={ faStepForward } />
                </button>
            </div>
            <div className="visualizer__wrapper">
                <p className="song-time">
                    <span className="song-current-time">01:18</span>
                    -
                    <span className="song-end-time">03:45</span>
                </p>
                <div className="visualizer">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    <div className="line4"></div>
                    <div className="line5"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Player;