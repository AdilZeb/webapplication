const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const Vehicle = require('../models/Vehicle');
const Transaction = require('../models/Transaction');
const { authMiddleware } = require('../middleware/auth');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy');

// @route   POST /api/checkout
// @desc    Create Stripe checkout session
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { vehicleId } = req.body;

        const vehicle = await Vehicle.findById(vehicleId);
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `${vehicle.year} ${vehicle.make} ${vehicle.vehicleModel}`,
                            description: `Booking fee for vehicle ID: ${vehicle._id}`,
                        },
                        unit_amount: 50000, // $500.00 booking fee
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}&vehicle_id=${vehicleId}`,
            cancel_url: `${process.env.FRONTEND_URL}/vehicles/${vehicleId}`,
            metadata: {
                vehicleId: vehicleId,
                userId: req.user.userId,
            },
        });

        res.json({ sessionId: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Payment initialization failed' });
    }
});

// @route   POST /api/checkout/finalize
// @desc    Finalize transaction after payment
// @access  Private
router.post('/finalize', authMiddleware, async (req, res) => {
    try {
        const { sessionId, vehicleId } = req.body;

        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== 'paid') {
            return res.status(400).json({ error: 'Payment not completed' });
        }

        const existingTx = await Transaction.findOne({ stripe_payment_id: sessionId });
        if (existingTx) {
            return res.json({ transactionId: existingTx._id });
        }

        const vehicle = await Vehicle.findById(vehicleId);
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        const transaction = await Transaction.create({
            buyer_id: req.user.userId,
            showroom_id: vehicle.showroom_id,
            vehicle_id: vehicle._id,
            amount: session.amount_total ? session.amount_total / 100 : 0,
            stripe_payment_id: sessionId,
            status: 'completed',
            contract_url: `/contracts/generated/${sessionId}`,
        });

        vehicle.status = 'reserved';
        await vehicle.save();

        res.json({ transactionId: transaction._id });
    } catch (error) {
        console.error('Finalize error:', error);
        res.status(500).json({ error: 'Failed to finalize transaction' });
    }
});

module.exports = router;
