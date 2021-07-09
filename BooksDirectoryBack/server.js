/** On requiert l'utilisation de ces librairies */
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.use (bodyParser.urlencoded({extended: true}));

app.get('/books', (req, res) => {
    con.query('SELECT * FROM books', (err, lignes) => {
      if(err) throw err;
      res.json(lignes);
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});