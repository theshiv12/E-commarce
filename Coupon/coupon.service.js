const Coupon = require("./coupon.model")
const Order = require("../Order/order.model")
exports.createCoupon = async(couponParams)=>{
    try {
    return await Coupon.create(couponParams)
           
} catch (error) {
        throw new Error(error.message) 
}
}

exports.getAllCoupon = async()=>{
    try {
        return await Coupon.find()
               
    } catch (error) {
            throw new Error(error.message) 
    }
}

exports.getById =  async(couponId)=>{
    try {
        return await Coupon.findOne({'code':couponId})
               
    } catch (error) {
            throw new Error(error.message) 
    }
}

exports.applyCoupon = async(userId,couponCode)=>{
    const order = await Order.findOne({'user':userId})
    const coupon = await Coupon.findOne({'code':couponCode})
    if(!order) throw new Error("Order Not Found!!")
    if (!coupon.isValid()) {
        throw new Error('Coupon is not valid');
      }
     const discount = coupon.calculateDiscount(order.total);
         order.total -= discount;
          order.coupon = {
        code: coupon.code,
        discount,
      };
    
      await order.save();

}
