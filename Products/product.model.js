const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  category: [
    {
      color: String,
      image: Array,
    }
  ],
  price:{type:Number, required:true,default:0},
  tag: Array,
  isAvailable:{type:Boolean,default:false},
  stock: {type:Number,default:1}
});

module.exports = mongoose.model("Product", productSchema);
