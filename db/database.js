var mysql = require('mysql');
var config = require("config");
var connection = mysql.createConnection({
    host:config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
});

module.exports = connection;