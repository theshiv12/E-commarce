const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

couponSchema.methods.isValid = function() {
  return Date.now() <= this.expirationDate.getTime();
};

couponSchema.methods.calculateDiscount = function(amount) {
  return Math.min(amount, this.discount);
};

module.exports = mongoose.model('Coupon', couponSchema);

