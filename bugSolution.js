const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.on('error', err => {
  console.error('Server Error:', err);
  // Add more robust error handling here, such as logging to a file, notifying an external service, etc.
  process.exit(1); //Exit the process to prevent further issues
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Simulate an error
setTimeout(()=>{server.emit('error',new Error('Something went wrong'))},3000); 