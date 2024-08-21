const Playlist = require('../models/Playlist');
const Song = require('../models/Song');

exports.createPlaylist = async (req, res) => {
    const { name } = req.body;

    try {
        const playlist = new Playlist({
            name,
            user: req.user._id,
            songs: [],
        });

        const savedPlaylist = await playlist.save();
        res.status(201).json(savedPlaylist);
    } catch (error) {
        res.status(500).json({ message: 'Error creating playlist', error: error.message });
    }
};

exports.addSongToPlaylist = async (req, res) => {
    const { playlistId, songId } = req.body;

    try {
        const playlist = await Playlist.findById(playlistId);
        const song = await Song.findById(songId);

        if (!playlist || !song) {
            return res.status(404).json({ message: 'Playlist or song not found' });
        }

        if (playlist.songs.includes(songId)) {
            return res.status(400).json({ message: 'Song already in playlist' });
        }

        playlist.songs.push(songId);
        const updatedPlaylist = await playlist.save();

        res.status(200).json(updatedPlaylist);
    } catch (error) {
        res.status(500).json({ message: 'Error adding song to playlist', error: error.message });
    }
};


exports.getUserPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({ user: req.user._id }).populate('songs');
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching playlists', error: error.message });
    }
};


exports.removeSongFromPlaylist = async (req, res) => {
    const { playlistId, songId } = req.body;

    try {
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        playlist.songs = playlist.songs.filter(id => id.toString() !== songId);
        const updatedPlaylist = await playlist.save();

        res.status(200).json(updatedPlaylist);
    } catch (error) {
        res.status(500).json({ message: 'Error removing song from playlist', error: error.message });
    }
};


exports.deletePlaylist = async (req, res) => {
    const { playlistId } = req.params;

    try {
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        if (playlist.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        await playlist.remove();
        res.status(200).json({ message: 'Playlist deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting playlist', error: error.message });
    }
};
