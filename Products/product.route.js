const express = require("express")
const route = express.Router()
const product = require("./product.controller")
const productService = require("./product.service")
const {upload} = require("../shared/fileUpload")

route.post("/create",product.create)
route.post("/products/:productId/category/:categoryId/images",upload.array('file'),product.uploadImages)
route.get("/getAllProduct",product.getAllProductsWithPagination)
route.get("/getById/:productId",product.getProductById)
module.exports = route