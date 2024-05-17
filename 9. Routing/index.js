import http from 'http'

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    res.end('<a href="/contact">Contact</a>');
  }else if(req.url==="/about"){
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    res.end('<h1>About Page</h1>');
  }else if(req.url==="/contact"){
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    res.end('<h1>ContactUs Page</h1>');
  }else{
    res.writeHead(404,'BAD',{'Content-Type':'text/html'})
    res.end('<h1>Page not found :(</h1>');
  }
})

server.listen(8000, ()=>console.log("Server Up!"))