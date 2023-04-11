const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: String, required: true },
    price: { type: Number, required: true },
   title : { type: Number, required: true }
  }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  deliveryAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  deliveryStatus: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    required: true,
    default: 'pending'
  },
  payment: {
    method: { type: String, enum: ['Credit Card', 'Debit Card', 'Net Banking',"Cash"], required: true },
    transactionId: { type: String }
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    required: true,
    default: 'pending'
  },
  coupon:{
    code:{type:String},
    discount:{type:Number}
  },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered'], default: 'Pending' },
  total: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
