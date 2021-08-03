'use strict';

const mysql = require('mysql')

var con = mysql.createConnection({
    //host: "127.0.0.1",
    host: "192.168.1.69",
    user: "root",
    password: 'root',
    database: 'booksdirectory',
    port: 3306,
    debug: true
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = con;