const User = require("./user.model")

exports.createAnUser = async (userParams)=>{
    try {
    const user = await User.findOne({email:userParams.email})
    if(user){
         throw Error("user already exist ");
    }
    return await User.create(userParams)
} catch (error) {
        return error
}
}

exports.getAll = async()=>{
    try {
        return await User.find({})
    } catch (error) {
        return error
    }
}