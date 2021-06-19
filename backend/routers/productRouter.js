var express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data.js');
var Product = require('../models/productModel.js');

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    product ? res.send(product)
        : res.status(404).send({ message: "Product not found" });
}))

// productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
//     await Product.deleteMany();
//     const createdProducts = await Product.insertMany(data.products);
//     res.send({ createdProducts });
// }));

module.exports = productRouter;