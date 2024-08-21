import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../../redux/slices/songSlice';
import { selectSongs } from '../../redux/slices/songSlice';
import './SongLibrary.css'; 

const SongLibrary = () => {
    const dispatch = useDispatch();
    const songs = useSelector(selectSongs);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadSongs = async () => {
            try {
                await dispatch(fetchSongs());
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadSongs();
    }, [dispatch]);

    if (loading) return <p>Loading songs...</p>;
    if (error) return <p>Error loading songs: {error}</p>;

    return (
        <div className="song-library">
            <h2>Song Library</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song._id} className="song-item">
                        <div className="song-info">
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                        <button className="select-button">Select</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongLibrary;
