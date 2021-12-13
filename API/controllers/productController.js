const Product = require('../models/productModel');
const { getPostData } = require('../utils')

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

// Create a new product
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const { title, price, description } = JSON.parse(body);
    const product = {
      title,
      price,
      description
    };
    const newProduct = await Product.create(product);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newProduct));

  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getProducts,
  getProductById,
  createProduct
};