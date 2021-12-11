const http = require('http');

console.log('Server is running...');

// Very cool.
// console.log(http);

const server = http.createServer((req, res) => {})
// This checks to see if there is a port number specified ...
// If there is, it will use that port number.
// If there isn't, it will use port 5000.
const PORT = process.env.PORT || 5000;
// console.log(process.env);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));