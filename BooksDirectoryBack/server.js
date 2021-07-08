/** On requiert l'utilisation de ces librairies */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

const app = express();

app.use(bodyParser.json());

app.use (bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: 'Bienvenue sur mon app !'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});