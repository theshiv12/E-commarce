const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require('dotenv').config();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("server is running on port 3000s");
})
// let user=
app.use("/",require("./routers/user.route"))
const url = process.env.MONGO_URL
console.log(url);
mongoose.connect("mongodb://mongo-db:27017/E-commerce", { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
    console.log("mongo connected")
}).catch((err)=>{
    console.log(err);
})

