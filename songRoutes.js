const express = require('express');
const { getAllSongs, getSongById } = require('../controllers/songController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getAllSongs);
router.route('/:id').get(protect, getSongById);

module.exports = router;
