const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true
  },
  warehouseId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Warehouse', 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true, 
    min: 0 
  },
}, { timestamps: true });

module.exports = StockSchema; 