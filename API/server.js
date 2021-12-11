const http = require('http');
const products = require('./data/products');

console.log('Server is running...');

// Very cool.
// console.log(http);

const oldServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');

  // The res.end() function is used to end the response process.
  //  This method comes from the Node core.
  res.end();
})

const server = http.createServer((req, res) => {
  if (req.url === '/api/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
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