var express = require('express');
var route = express();
var con = require('../db/database');

con.connect();

route.get("/", (req, res) => {
    var sql = "select * from Emp";
    con.query(sql, (err, result) => {
        if (err == null)
            res.send(JSON.stringify(result));
        else
            res.send(JSON.stringify(err));
    });
});
    route.get("/:No", (req, res) => {
        var sql = `select * from Emp where No=${req.params.No}`;
        con.query(sql, (err, result) => {
            if (err == null)
                res.send(JSON.stringify(result));
            else
                res.send(JSON.stringify(err));
        });
});
        route.post("/", (req, res) => {
        const {No,Name,Age} = req.body; 
        var sql = `insert into Emp values(${No},${Name},${Age})`;
        con.query(sql, (err, result) => {
            if (err == null)
                res.send(JSON.stringify(result));
            else
                res.send(JSON.stringify(err));
        });
        
});    
route.put("/:No", (req, res) => {
    var no = req.params.no;
    const {Name,Age} = req.body; 
    var sql = `update Emp set Name=${Name},Age=${Age} where No=${no}`;
    con.query(sql, (err, result) => {
        if (err == null)
            res.send(JSON.stringify(result));
        else
            res.send(JSON.stringify(err));
    });
    
});    
route.delete("/:No", (req, res) => {
    var sql = `delete from Emp where No=${req.params.No}`;
    con.query(sql, (err, result) => {
        if (err == null)
            res.send(JSON.stringify(result));
        else
            res.send(JSON.stringify(err));
    });
});

module.exports = route;