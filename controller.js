'use strict';

const response = require('./res');
const connection = require('./conn');
const crypto = require('crypto-js');

exports.index = (req, res) => {
    response.ok("Welcome!!", res);
};

exports.login = (req, res) => {
    const user = req.body.user_name;
    const pass = crypto.MD5(req.body.pass_word).toString();

    connection.query("SELECT * FROM users WHERE username = ? AND password = ?",
    [user,pass],
    (error, rows, fields) => {
        if(rows.length === 0) {
            response.error("Gagal", res);
        } else {
            response.ok(rows.length, res);
        }
    }); 
};

exports.home = (req, res) => {
    connection.query("SELECT * FROM daftar_barang", (err, rows, fields) => {
        if (rows.length === 0) {
            response.error("Daftar barang kosong", res);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.transaksi = (req, res) => {
    const user = req.body.username;
    const driver = req.body.driver;
    const id = req.body.id;

    connection.query("INSERT INTO daftar_transaksi", [user, driver, id], 
    (error, rows, fields) => {
        
    });
};