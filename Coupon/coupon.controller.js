const coupon = require("./coupon.service")

exports.createCoupon = async(req,res)=>{
  try {
    return res.json({
        success:true,
        data:await coupon.createCoupon(req.body)
    })
  } catch (error) {
    return res.json({
        success:false,
        message:error.message
    }) 
  }
}

exports.getAll = async(req,res)=>{
    try {
      return res.json({
          success:true,
          data:await coupon.getAllCoupon()
      })
    } catch (error) {
      return res.json({
          success:false,
          message:error.message
      }) 
    }
  }

  exports.getById = async(req,res)=>{
    try {
      return res.json({
          success:true,
          data:await coupon.getById(req.params.couponId)
      })
    } catch (error) {
      return res.json({
          success:false,
          message:error.message
      }) 
    }
  }