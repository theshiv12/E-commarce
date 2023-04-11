const express = require("express")
const route = express.Router()
const userController = require("./user.controller")
const {upload} = require("../shared/fileUpload")
route.get("/",userController.getUser)
route.post("/create",userController.create)
route.post("/upload",upload.single('file'),userController.uploadProfile)
module.exports = route


