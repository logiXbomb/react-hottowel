var app = require("koa")();
var serve = require("koa-static");
var config = require("./serverConfig");

app.use(serve(__dirname + config.client)); //TODO: Create config

app.listen(config.port, function () {
  console.log("listening on port: " + config.port + "...");
});
