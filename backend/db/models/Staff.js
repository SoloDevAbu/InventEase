const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    warehouseId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Warehouse', 
        required: true 
    },
}, { timestamps: true });

module.exports = StaffSchema;
