'use strict';

const mysql = require('mysql')

var con = mysql.createConnection({
    host: "192.168.1.69",
    user: "root",
    password: 'root',
    database: 'booksdirectory',
    port: 3306
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = con;