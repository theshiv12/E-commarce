const express = require("express")
const router = express.Router()
const coupon = require("./coupon.controller")
// router.get("/get-all-coupon",)
router.post("/create",coupon.createCoupon)
router.get("/get-all-coupon",coupon.getAll)
router.get("/get-by-id/:couponId",coupon.getById)

module.exports = router