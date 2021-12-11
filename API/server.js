const http = require('http');

console.log('Server is running...');

// Very cool.
// console.log(http);

const server = http.createServer((req, res) => {})
const PORT = 3000;
server.listen(PORT);