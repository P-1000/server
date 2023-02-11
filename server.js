
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.end('Node js server running!');
});

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong', err);
  }

  console.log(`Server is listening on port ${port}`);
}); 