const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
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

module.exports = ManagerSchema;
