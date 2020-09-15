const http = require('http')
const server = http.createServer((res, req)=>{
    res.end('sin')
})

server.listen(3000);
console.log('server run on port 3000')