import http from 'http'

//Create Our Server
const server= http.createServer((req, res)=>{
  // console.log(req)
  // res.setHeader("content-Type","text/html")
  // res.statusCode=404;
  // res.statusMessage = "BAD";
  res.writeHead(202, "GOOD", {"Content-Type":"text/html"})

  res.write("<h1>Hello from Node.js Server</h1>")
})

server.listen(8000, ()=>console.log("server up!"))
