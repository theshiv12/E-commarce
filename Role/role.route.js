const express = require("express")
const roleController  = require("./role.controller")
const router = express.Router()

router.post("/create",roleController.create)

module.exports = router