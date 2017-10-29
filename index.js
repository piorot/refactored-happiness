"use strict";

const HttpServer = require("http-server");
const port = process.env.port || 8000;
const options = { root: './client',cache: -1 };

let server = HttpServer.createServer(options);
startServer();


function startServer(){
    
    server.listen();
    console.log("server started");
}

