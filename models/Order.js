const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  // Optioneel: je kan hier later smaken/toppings toevoegen als je wilt
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
