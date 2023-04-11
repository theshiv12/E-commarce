const Product = require("./product.model");

exports.getAllProductsWithPagination = async () => {
  const perPage = 10;
  let page = 1;
  try {
    const products = await Product.find({}).skip(perPage * page - perPage);
    const count = await Product.count();
    return { products: products, count: count };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getById = async (id)=>{
    try {
        return await Product.findById(id)
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.createProduct = async (productParams) => {
  try {
    return await Product.create(productParams);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.uploadProductImagesInCategory = async (productId,categoryId,images) => {
  try {
    console.log(productId,categoryId);

    const product = await Product.findOneAndUpdate(
      {
        _id:productId,
        "category._id": categoryId,
      },
      {
        $addToSet: {
          "category.$.image": { $each: images },
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
