const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${new Date().toLocaleString()}: ${req.url} New request received\n`;
    
    fs.appendFile('log.txt', log, (err, data) => {
    // console.log('Request received');
    // console.log(req.headers);
        // res.end("hello from server again");
        switch(req.url) {
            case '/':
                res.end("Hello from the Home Page");
                break;
            case '/about':
                res.end("Hello from the About Page");
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