
const Song = require('../models/Song');

exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find({});
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching songs', error: error.message });
    }
};

exports.getSongById = async (req, res) => {
    const { id } = req.params;

    try {
        const song = await Song.findById(id);

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching song', error: error.message });
    }
};
