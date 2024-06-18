import http from "http";

const server = http.createServer((req,res) => {
    // res.write('Hello World!!');
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404

    res.writeHead(500, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Server Error'}))
})

server.listen(8000, () => console.log('Server running on port 8000'))