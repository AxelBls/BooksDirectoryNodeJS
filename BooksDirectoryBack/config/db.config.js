'use strict';

const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Mastermanga12!',
    database: 'booksdirectory',
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = dbcon;