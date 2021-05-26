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
            <button className="play-btn">
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
        </div>
     );
}
 
export default Player;