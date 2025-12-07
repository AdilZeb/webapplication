const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const Showroom = require('../models/Showroom');
const { authMiddleware, requireRole } = require('../middleware/auth');

// @route   GET /api/vehicles
// @desc    Get all vehicles (with optional showroom filter)
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { showroom_id } = req.query;
        const query = showroom_id ? { showroom_id } : {};

        const vehicles = await Vehicle.find(query).populate('showroom_id', 'business_name city');
        res.json({ vehicles });
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// @route   GET /api/vehicles/:id
// @desc    Get single vehicle
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).populate('showroom_id');
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }
        res.json({ vehicle });
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// @route   POST /api/vehicles
// @desc    Create a new vehicle
// @access  Private (Showroom Owner)
router.post('/', authMiddleware, requireRole(['showroom_owner']), async (req, res) => {
    try {
        const showroom = await Showroom.findOne({ owner_user_id: req.user.userId });
        if (!showroom) {
            return res.status(404).json({ error: 'Showroom not found for this user' });
        }

        const vehicle = await Vehicle.create({
            ...req.body,
            showroom_id: showroom._id,
        });

        res.status(201).json({ vehicle });
    } catch (error) {
        console.error('Error creating vehicle:', error);
        res.status(500).json({ error: 'Failed to create vehicle' });
    }
});

// @route   PUT /api/vehicles/:id
// @desc    Update a vehicle
// @access  Private (Showroom Owner)
router.put('/:id', authMiddleware, requireRole(['showroom_owner']), async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        const showroom = await Showroom.findOne({ owner_user_id: req.user.userId });
        if (!showroom || vehicle.showroom_id.toString() !== showroom._id.toString()) {
            return res.status(403).json({ error: 'Not authorized to update this vehicle' });
        }

        Object.assign(vehicle, req.body);
        await vehicle.save();

        res.json({ vehicle });
    } catch (error) {
        console.error('Error updating vehicle:', error);
        res.status(500).json({ error: 'Failed to update vehicle' });
    }
});

// @route   DELETE /api/vehicles/:id
// @desc    Delete a vehicle
// @access  Private (Showroom Owner)
router.delete('/:id', authMiddleware, requireRole(['showroom_owner']), async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        const showroom = await Showroom.findOne({ owner_user_id: req.user.userId });
        if (!showroom || vehicle.showroom_id.toString() !== showroom._id.toString()) {
            return res.status(403).json({ error: 'Not authorized to delete this vehicle' });
        }

        await vehicle.deleteOne();
        res.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        res.status(500).json({ error: 'Failed to delete vehicle' });
    }
});

module.exports = router;
