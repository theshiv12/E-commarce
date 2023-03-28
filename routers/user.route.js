const express = require("express")
const route = express.Router()
const userController = require("../controllers/user.controller")

route.get("/",userController.getUser)
route.post("/create",userController.create)

module.exports = route