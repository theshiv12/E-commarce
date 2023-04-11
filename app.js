const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require('dotenv').config();
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("server is running on port 3000s");
})


// let user=
app.use("/",require("./Auth/auth.route"))
app.use("/api",require("./User/user.route"))
app.use("/role", require("./Role/role.route"))
app.use("/product",require("./Products/product.route"))
app.use("/cart",require("./Cart/cart.route"))
app.use("/coupon",require("./Coupon/coupon.route"))
// const url = process.env.MONGO_URL
// console.log(url);
// mongoose.connect("mongodb://mongo-db:27017/E-commerce", { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
//     console.log("mongo connected")
// }).catch((err)=>{
//     console.log(err);
// })

const url = process.env.URL
console.log(url);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
    console.log("mongo connected")
}).catch((err)=>{
    console.log(err);
})


