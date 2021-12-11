const http = require('http');

console.log('Server is running...');

// Very cool.
// console.log(http);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');

  // The res.end() function is used to end the response process.
  //  This method comes from the Node core.
  res.end();
})
// This checks to see if there is a port number specified ...
// If there is, it will use that port number.
// If there isn't, it will use port 5000.
const PORT = process.env.PORT || 5000;
// console.log(process.env);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));