const cart = require("./cart.service")

exports.addToCart = async(req,res)=>{
    try {
        return  res.json({
        data: await cart.addToCartService(req.params.productId,req.body)
        })
    } catch (error) {
        return res.json({
            success:false,
            message:error.message
        })
    }
}

exports.removeOneItemFromCart = async(req,res)=>{
    try {
    const obj = await cart.reduceOneItemFromCart(req.params.productId);
    return res.json({
        data:obj
    })
            
} catch (error) {
        return res.json({
            message:error.message
        })
}
}

exports.removeAllItemFromCart = async(req,res)=>{
    try {
    const obj = await cart.reduceAllItemsFromCart(req.params.productId);
    return res.json({
        data:obj
    })
            
} catch (error) {
        return res.json({
            message:error.message
        })
}
}

exports.getAllCartItems = async(req,res)=>{
    try {
    return res.json({
        success:true,
        data:await cart.getAllCartItem(req.params.userId)
    })           
} catch (error) {
        return res.json({
            success:false,
            message:error.message
        })
}
}