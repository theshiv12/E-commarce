const Product = require("./product.service");

exports.getAllProductsWithPagination = async (req, res) => {
  try {
    return res.json({
      success: true,
      data: await Product.getAllProductsWithPagination(),
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
    try {
        return res.json({
            success: true,
            data: await Product.getById(req.params.productId),
        })
    } catch (error) {
        return res.json({
            success:false,
            message:error.message
        })
    }
};


exports.create = async (req, res) => {
  try {
    return res.status(201).json({
      success: true,
      data: await Product.createProduct(req.body),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.uploadImages = async (req, res) => {
  const images = await req.files.map(function (file) {
    return {
      url: file.path,
    };
  });
  try {
    const updatedData = await Product.uploadProductImagesInCategory(
      req.params.productId,
      req.params.categoryId,
      images
    );
    return res.json({
      data: updatedData,
    });
  } catch (error) {
    return res.json({ errro: error.message });
  }
};
