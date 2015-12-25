var serverConfig = {
  port: process.env.PORT || '3000',
  client: process.env.source || "./../.tmp/"
}

module.exports = serverConfig;
