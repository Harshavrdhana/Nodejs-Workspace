import http from 'http'

const server= http.createServer((req, res)=>{
  res.writeHead(202, "GOOD", {"Content-Type":"text/html"})
  res.write("<h1> Node.js Server</h1>")
})

server.listen(8000, ()=>console.log("server up!"))
 