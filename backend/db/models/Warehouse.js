const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
    },
    staff: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff'
        }
    ],
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }
    ]
}, { timestamps: true });

module.exports = WarehouseSchema;
