const Cart = require("./cart.model");
const Product = require("../Products/product.model");

exports.addToCartService = async (productId, itemParams) => {
  try {
    let cart = await Cart.findOne({ "items.productId": productId });
    if (!cart) cart = new Cart({});
    const product = await Product.findOne({ _id: productId });
    const index = cart.items.findIndex((p) => p.productId == productId);
    if (index > -1) {
      cart.items[index].qty++;
      cart.items[index].price = cart.items[index].qty * product.price;
      cart.totalQty++;
      cart.totalPrice += parseInt(product.price);
    } else {
      cart.items.push({
        productId: productId,
        qty: 1,
        price: product.price,
        title: product.title,
      });
      cart.totalQty++;
      cart.totalPrice += product.price;
      cart.user = itemParams.userId;
    }
    return {
      success: true,
      message: "Item added to cart successfully!!",
      data: await cart.save(),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.reduceOneItemFromCart = async (productId) => {
  try {
  const cart = await Cart.findOne({"items.productId": productId });
  const product = await Product.findOne({ _id: productId });
  if (!cart) throw new Error("cart not found");
  const indexOfProduct = cart.items.findIndex((p) => p.productId == productId);
  if (indexOfProduct > -1) {
    cart.items[indexOfProduct].qty--;
    cart.items[indexOfProduct].price -= product.price;
    cart.totalPrice -= product.price;
    cart.totalQty -= 1;
    if (cart.items[indexOfProduct].qty < 0)
      await cart.items.remove({ _id: cart.items[indexOfProduct]._id });
    await cart.save();
  }
  
  if(cart.totalQty<0)
       await Cart.findByIdAndRemove(cart._id);
  return cart
      
} catch (error) {
     throw new Error(error.message)
}
};

exports.reduceAllItemsFromCart  = async(productId)=>{
    try {
        const cart = await Cart.findOne({"items.productId": productId });
        const product = await Product.findOne({ _id: productId });
        if (!cart) throw new Error("cart not found");
        const indexOfProduct = cart.items.findIndex((p) => p.productId == productId);
        if (indexOfProduct > -1) {
          cart.totalPrice -= product.price;
          cart.totalQty -= 1;
          await cart.items.remove({ _id: cart.items[indexOfProduct]._id });
          await cart.save();
        }
        
        if(cart.totalQty<0)
             await Cart.findByIdAndRemove(cart._id);
        return cart
            
      } catch (error) {
           throw new Error(error.message)
      }
}


exports.getAllCartItem = async(userId)=>{
    try {
    const cart = await Cart.findOne({user:userId})
    if(!cart) throw new Erro('cart not found!!');
    return cart
            
} catch (error) {
       throw new Error(error.message) 
}
}