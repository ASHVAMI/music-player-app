import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists, createPlaylist, addSongToPlaylist } from '../../redux/slices/playlistSlice';
import { fetchSongs } from '../../redux/slices/songSlice';

const Playlist = () => {
    const [newPlaylistName, setNewPlaylistName] = useState('');
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [selectedSong, setSelectedSong] = useState(null);

    const dispatch = useDispatch();
    const { playlists, status, error } = useSelector((state) => state.playlist);
    const { songs } = useSelector((state) => state.song);

    useEffect(() => {
        dispatch(fetchPlaylists());
        dispatch(fetchSongs());
    }, [dispatch]);

    const handleCreatePlaylist = () => {
        if (newPlaylistName.trim()) {
            dispatch(createPlaylist({ name: newPlaylistName }));
            setNewPlaylistName('');
        }
    };

    const handleAddSongToPlaylist = (songId) => {
        if (selectedPlaylist) {
            dispatch(addSongToPlaylist({ playlistId: selectedPlaylist, songId }));
            setSelectedSong(null);
        }
    };

    return (
        <div className="playlist-container">
            <h2>Your Playlists</h2>

            {/* Create New Playlist */}
            <div className="create-playlist">
                <input
                    type="text"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="New Playlist Name"
                />
                <button onClick={handleCreatePlaylist}>Create Playlist</button>
            </div>

            {/* Display Playlists */}
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="playlists">
                {playlists.map((playlist) => (
                    <div key={playlist._id} className="playlist">
                        <h3>{playlist.name}</h3>
                        <ul>
                            {playlist.songs.map((song) => (
                                <li key={song._id}>{song.title}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Add Songs to Playlist */}
            {selectedPlaylist && (
                <div className="add-song">
                    <h3>Add Song to Playlist</h3>
                    <select onChange={(e) => setSelectedSong(e.target.value)} value={selectedSong}>
                        <option value="">Select a song</option>
                        {songs.map((song) => (
                            <option key={song._id} value={song._id}>{song.title}</option>
                        ))}
                    </select>
                    <button onClick={() => handleAddSongToPlaylist(selectedSong)}>Add Song</button>
                </div>
            )}
        </div>
    );
};

export default Playlist;
