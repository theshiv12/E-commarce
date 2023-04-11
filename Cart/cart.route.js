const express = require("express")
const cart = require("./cart.controller")

const router = express.Router()

router.post("/add-to-cart/:productId",cart.addToCart);
router.delete("/remove-one-item-from-cart/:productId",cart.removeOneItemFromCart)
router.delete("/remove-all-item-from-cart/:productId",cart.removeAllItemFromCart)
router.get("/get-all-cart-item/:userId",cart.getAllCartItems)

module.exports = router