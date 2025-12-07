const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    showroom_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Showroom', required: true },
    make: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    mileage: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    transmission: { type: String, required: true },
    images: [{ type: String }],
    description: { type: String },
    status: {
        type: String,
        enum: ['available', 'reserved', 'sold'],
        default: 'available'
    },
    specifications: { type: Map, of: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', VehicleSchema);
