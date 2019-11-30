var express = require("express");
var app = express();
var config = require("config");
var empRouter = require('./router/emp');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/emp",empRouter);

app.listen(parseInt(config.get("port")),()=>{
    console.log("Server Started on port 7755");
});
