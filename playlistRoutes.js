const express = require('express');
const { createPlaylist, addSongToPlaylist, getUserPlaylists, removeSongFromPlaylist, deletePlaylist } = require('../controllers/playlistController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createPlaylist).get(protect, getUserPlaylists);
router.route('/add').post(protect, addSongToPlaylist);
router.route('/remove').post(protect, removeSongFromPlaylist);
router.route('/:playlistId').delete(protect, deletePlaylist);

module.exports = router;
