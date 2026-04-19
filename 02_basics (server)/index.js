const http = require('http'); // this is a built in module in node.js used to create a server
const fs = require('fs');
const url = require('url');

// const myServer = http.createServer((req, res) => {});
// const myServer = http.createServer((req, res) => {
//   console.log("New request received");
//   console.log(req.headers)
//   console.log(req) // req keyword is used to get the request object from the client side
//   res.end("Hello from the server");
// });

const myServer = http.createServer((req, res) => {

    if(req.url === '/favicon.ico') return res.end();

    const log = `${new Date().toLocaleString()}: ${req.method} ${req.url} New request received\n`;

    const myUrl = url.parse(req.url, true); // true is used to parse the query string
    console.log(myUrl);
    
    fs.appendFile('log.txt', log, (err, data) => {
        
        switch(myUrl.pathname) {
            case '/':
                res.end("Hello from the Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hello, ${username}`);
                break;
            case '/contact':
                res.end("Hello from the Contact Page");
                break;
            default:
                res.end("404 Page Not Found");
        }
    })
        });

myServer.listen(8000, () => console.log("Server Started"));