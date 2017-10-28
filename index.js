"use strict";

const HttpServer = require("http-server");
const deployd = require('deployd');
const port = process.env.port || 8000;
const options = { root: './client',cache: -1 };

let server = HttpServer.createServer(options);
let deploydOptions = {
    port: port,
    env: 'production',
    db: {
      host: 'ds237445.mlab.com',
      port: 37445,
      name: 'heroku_p4nmksq9',
      credentials: {
        username: 'piorot',
        password: 'Test123'
      }
    }
};


startServer();


function startServer(){
    
    server = deployd.attach(server, deploydOptions)
    server.listen();
    console.log("server started");
}

