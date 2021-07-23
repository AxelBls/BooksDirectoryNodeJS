'use strict';

const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'root',
    database: 'booksdirectory',
    socketPath: '/var/run/mysqld/mysqld.sock'
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = con;