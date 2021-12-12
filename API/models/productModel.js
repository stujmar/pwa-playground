const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');

const { writeDataToFile } = require('../utils');

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    console.log("creating product", newProduct);
    products.push(newProduct);
    writeDataToFile('./data/products.json', products)
    resolve(newProduct);
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
