const Order = require("./order.model");
const User = require("../User/user.model")
const Cart = require("../Cart/cart.model")

exports.checkout = async(req,res)=>{
     const cart = await Cart.findOne({_id:req.params.cartId});
     const user = await User.findOne({_id:req.body._id})
     if(!cart) throw new Error("cart not found")
     let order = new  Order({
        items:cart.items,
        user:user._id,
        address:req.body.Id || user.address,
        total:cart.totalPrice  
     });
    console.log(order);
    try {
      await order.save();
    } catch (error) {
        
    }
     

    } 