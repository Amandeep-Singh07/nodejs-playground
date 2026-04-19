const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.method === "GET" && req.url === "/") {
        // Login page
        fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
            res.end(data);
        });
    }
    else if (req.method === 'POST' && req.url === '/login') {
        let body = "";
        req.setEncoding = "utf-8";
        req.on("data", (chunk) => {
            body = body + chunk;
        })
        req.on("end", () => {
            console.log(body);
            const parsedBody = querystring.parse(body);
            console.log(parsedBody);
            if (parsedBody.username === "coco" && parsedBody.password === '123') {
                res.end("welcome Coco!");
            }
            else {
                res.end("Invalid Username or password");
            }
        })
        

    }
});

server.listen(3000, () => {
  console.log("Server started successfully");
});
