const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  flavor: { type: String, required: true },
  topping: { type: String, required: true },
  status: { type: String, default: 'te verwerken' },
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
