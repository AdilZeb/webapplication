const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const { authMiddleware } = require('../middleware/auth');

// @route   GET /api/contracts/:id
// @desc    Get contract details
// @access  Private
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
            .populate('buyer_id', 'name email')
            .populate('showroom_id', 'business_name address')
            .populate('vehicle_id', 'make vehicleModel year');

        if (!transaction) {
            return res.status(404).json({ error: 'Contract not found' });
        }

        const contractData = {
            _id: transaction._id,
            amount: transaction.amount,
            createdAt: transaction.createdAt,
            buyer: transaction.buyer_id,
            showroom: transaction.showroom_id,
            vehicle: transaction.vehicle_id,
        };

        res.json({ contract: contractData });
    } catch (error) {
        console.error('Contract fetch error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
