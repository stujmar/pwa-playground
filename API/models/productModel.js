const products = require('../data/products');

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
  findAll,
  findById
};
