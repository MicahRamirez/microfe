var convict = require('convict');
var path = require('path');
 
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  staticContent: {
    doc: "The static content for the application",
    default: path.join(__dirname, 'build', 'index.html'),
  }
});

module.exports = config;