// Para type: commonjs en package.json:
// const http = require("http");

// Para type: module en package.json:
import http from "http";

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    res.statusCode = 201;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo!");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));