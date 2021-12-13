const http = require('http');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('./controllers/productController');

console.log('Server is running...');

// Very cool.
// console.log(http);

const server = http.createServer((req, res) => {
  // console.log(res);
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/[a-z0-9-]+/) && req.method === 'GET') {
    const id = req.url.split('/')[3];
    getProductById(req, res, id);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/[a-z0-9-]+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3];
    deleteProduct(req, res, id);
  } else if (req.url.match(/\/api\/products\/[a-z0-9-]+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});


// This checks to see if there is a port number specified ...
// If there is, it will use that port number.
// If there isn't, it will use port 5000.
const PORT = process.env.PORT || 5000;
// console.log(process.env);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));