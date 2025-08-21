const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'nieuw' },
  flavors: { type: [String], default: [] },
  toppings: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
