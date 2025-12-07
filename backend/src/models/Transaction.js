const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    showroom_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Showroom', required: true },
    vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    amount: { type: Number, required: true },
    stripe_payment_id: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    contract_url: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
