const express = require('express');
const router = express.Router();
const Showroom = require('../models/Showroom');
const { authMiddleware, requireRole } = require('../middleware/auth');

// @route   POST /api/showroom/profile
// @desc    Create or update showroom profile
// @access  Private (Showroom Owner)
router.post('/profile', authMiddleware, requireRole(['showroom_owner']), async (req, res) => {
    try {
        let showroom = await Showroom.findOne({ owner_user_id: req.user.userId });

        if (showroom) {
            // Update existing
            Object.assign(showroom, req.body);
            await showroom.save();
        } else {
            // Create new
            showroom = await Showroom.create({
                ...req.body,
                owner_user_id: req.user.userId,
            });
        }

        res.status(201).json({ showroom });
    } catch (error) {
        console.error('Error saving showroom profile:', error);
        res.status(500).json({ error: 'Failed to save showroom profile' });
    }
});

// @route   GET /api/showroom/profile
// @desc    Get showroom profile
// @access  Private
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const showroom = await Showroom.findOne({ owner_user_id: req.user.userId });
        res.json({ showroom });
    } catch (error) {
        console.error('Error fetching showroom profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// @route   GET /api/showroom
// @desc    Get all showrooms
// @access  Public
router.get('/', async (req, res) => {
    try {
        const showrooms = await Showroom.find({ verification_status: 'verified' });
        res.json({ showrooms });
    } catch (error) {
        console.error('Error fetching showrooms:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
