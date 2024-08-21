import React, { useState, useRef } from 'react';
import './MusicPlayer.css'; 

const MusicPlayer = ({ song, onPlayPause }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className="music-player">
            <audio
                ref={audioRef}
                src={song?.url} 
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            />
            <div className="player-controls">
                <button onClick={togglePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
            <div className="player-info">
                <p>{song?.title || 'No song selected'}</p>
                <p>{Math.floor(currentTime)} / {Math.floor(duration)}</p>
            </div>
        </div>
    );
};

export default MusicPlayer;
