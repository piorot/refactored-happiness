// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'production',
  public_dir: './client',
  db: {
    host: 'ds237445.mlab.com',
    port: 37445,
    name: 'heroku_p4nmksq9',
    credentials: {
      username: 'piorot',
      password: process.env.MONGODB_PASSWD
    }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});

