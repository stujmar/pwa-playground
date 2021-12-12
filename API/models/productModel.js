const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4, ...product };
    products.push(newProduct);
  })
};

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  })
};

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find(product => product.id === id);
    resolve(product);
    // if (product) {
      //   resolve(product);
      // }
      // else {
        //   reject(`Product with id ${id} not found`);
        // }
      })
    };
    
module.exports = {
  create,
  findAll,
  findById
};
