const Product = require('../models/productModel');

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products))
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description: get product by id
 * @route GET /api/products/:id
 */
async function getProductById(req, res, id) {
  try {
    const product = await Product.findById(id);
    console.log('here');
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProductById
};