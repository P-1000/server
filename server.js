
const http = require('http');
const port = process.env.PORT || 8081;

const todos = ["Buy milk", "Eat dinner", "Nap", "Go to the gym"];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    if(url === '/todos'){
      if(method === 'GET'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(todos.toString());
        res.end();
      }
    }else{
      res.writeHead(501);
    }
   

}).listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

