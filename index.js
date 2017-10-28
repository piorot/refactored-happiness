"use strict";

let HttpServer = require("http-server");

startServer();


function startServer(){
    let port = process.env.port || 8000;
    let options = { root: './client',
    cache: -1,
    showDir: undefined,
    autoIndex: undefined,
    gzip: undefined,
    robots: undefined,
    ext: undefined,
    
    proxy: undefined }
    let server = HttpServer.createServer();
    server.listen(port, "localhost");
    console.log("server started");
}