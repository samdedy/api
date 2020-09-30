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

exports.postData = router.post("/api/postData", (req, res) => {
    const { nama, jabatan, usia, tempat_lahir, tanggal_lahir } = req.body;
    let arr_input = [ nama, jabatan, usia, tempat_lahir, tanggal_lahir ];
    let object_input = { nama, jabatan, usia, tempat_lahir, tanggal_lahir };

    // Validasi parameter kurung, dan parameter diisi kosong
    if (arr_input.includes("") || arr_input.includes(undefined)){
        res.send("Ada inputan yang belum terisi");
    } else {
        mySQL.query("INSERT INTO karyawan SET ?", object_input, (err, result, fields) => {
            if (err) console.log(err);
            res.send({
                code: 200,
                message: "Add data karyawan berhasil",
                result: JSON.stringify(result)
            });
        })
    }
});

module.exports = router;