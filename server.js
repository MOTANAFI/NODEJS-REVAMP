import http from "http";
import fs from "fs/promises"
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

//__filename // current file name with the path
//__dirname // gives you the current path file you're in

const __filename = url.fileURLToPath(import.meta.url)
// console.log(__filename)
const __dirname = path.dirname(__filename);
// console.log(__dirname)

const server = http.createServer(async (req, res) => {
  // res.write('Hello World!!');
  // res.setHeader('Content-Type', 'text/html')
  // res.statusCode = 404
  // console.log(req.url)
  // console.log(req.method)
  try {
      if(req.method === 'GET') {
        let filePath;
        if (req.url === "/") {
            filePath = path.join(__dirname, 'public', '/index.html')
            
            //     res.writeHead(200, { "Content-Type": "text/html" });
            //     res.end("<h1>Home page</h1>");
              } else  if(req.url === '/about') {
                  filePath = path.join(__dirname, 'public', '/about.html')
                //     res.writeHead(200, { "Content-Type": "text/html" });
                //     res.end("<h1>It is about page!!</h1>");
                
            } else {
                throw new Error("not found")
                // res.writeHead(404, { "Content-Type": "text/html" });
                // res.end("<h1>Not Found!!</h1>");
          }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end()

      } else {
        throw new Error('Method not allowed')
      }

  }catch(error){

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("server error");

  }
  
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
