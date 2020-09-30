const express = require("express");
const router = express.Router();
const mySQL = require("../config/config");

exports.getHome = router.get("/", (req, res) => {
    console.log("You are inside a home page");
    res.send("You are inside a home page");
});

exports.getAllData = router.get("/api/all", (req,res) => {
    mySQL.query("SELECT * FROM karyawan", (err, result) => {
        if(err) console.log(err);
        res.send(JSON.stringify(result));
    })
});

module.exports = router;