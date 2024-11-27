const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    warehouses: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Warehouse' 
    }]
}, { timestamps: true });

module.exports = AdminSchema;
