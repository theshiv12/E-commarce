const User = require("../models/user.model")

exports.create = async(req,res)=>{
     const user = await User.findOne({email:req.body.email})
     if(user){
        return res.json({
            message:"user exist"
        })
     }
    await User.create(req.body)
    return res.json({
        success:true,
        message:"created"
    })
}

exports.getUser = async(req, res)=>{
    return res.json({
        data:await User.find(),
        message:"data"
    })
}