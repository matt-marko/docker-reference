const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;
    res.end('Success');
}).listen(1111);