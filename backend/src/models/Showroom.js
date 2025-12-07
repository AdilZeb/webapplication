const mongoose = require('mongoose');

const ShowroomSchema = new mongoose.Schema({
    owner_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    business_name: { type: String, required: true },
    license_number: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    verification_status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        default: 'pending'
    },
}, { timestamps: true });

module.exports = mongoose.model('Showroom', ShowroomSchema);
