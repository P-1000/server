
const http = require('http');
const port = process.env.PORT || 8081;

const todos = ["Buy milk", "Eat dinner", "Nap", "Go to the gym"];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    if(url === '/todos'){
      if(method === 'GET'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(todos.toString());
        
      }else if(method === 'POST'){
        let body = '';
        req.on("error",(err)=>{
          console.error(err);
        })
        .on("data",(chunk)=>{
          body += chunk;
        })
        .on("end",()=>{
          body = JSON.parse(body);
          console.log("data : " , body);
        })
      }
      else{
        res.writeHead(501);
      }
    }else{
      res.writeHead(404);
    }
    res.end();

}).listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

