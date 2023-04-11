const mongoose = require("mongoose")

const roleSchema = mongoose.Schema({
    name:{
        type:String
    },
    permission:{
        type:String
    }
})

module.exports = mongoose.model("Role",roleSchema)