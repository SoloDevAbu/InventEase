const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse'
    },
}, { timestamps: true });

module.exports = ProductSchema;