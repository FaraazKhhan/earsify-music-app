import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataContext } from "../contexts/DataProvider";
import {
    faPlay,
    faStop,
    faStepBackward,
    faStepForward
} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    const [
        currentSongPayload,
        isPlaying,
        audioRef,
        currentTime,
        playAudio,
        pauseAudio,
        stopAudio
    ] = useContext(DataContext);

    const [isMinimized, setMinimized] = useState(false);

    const showPlayer = () => {
        if (window.earsifyConfig) {
            const { config: { showPlayer = false } } = window.earsifyConfig
            return showPlayer
        }
        return false
    }

    return (
        <>
            {

                showPlayer()
                    ? (
                        <div className={"music-player " + isMinimized ? "min-screen" : "full-screen"}>
                            <audio ref={audioRef} src={currentSongPayload.stream} onTimeUpdate={handleProgress} className={isMinimized ? 'display-none' : 'display-block'} />

                            <div className={'flex ' + isMinimized ? 'flex-row' : 'flex-column'}>
                                <button onClick={isPlaying ? pauseAudio : playAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
                                <button onClick={stopAudio}>Stop</button>
                            </div>
                            <progress value={currentTime} max={audioRef.current.duration} />

                            {/* <div className="player">
                <button className="play-btn active">
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <div className="other-btn__wrapper">
                    <button className="stop-btn">
                        <FontAwesomeIcon icon={faStop} />
                    </button>
                    <button className="previous-btn">
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button className="next-btn">
                        <FontAwesomeIcon icon={faStepForward} />
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
            </div> */}
                        </div>
                    )
                    : null
            }
        </>
    );
}

export default Player;