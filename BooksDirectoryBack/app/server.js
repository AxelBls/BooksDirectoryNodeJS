/** On requiert l'utilisation de ces librairies */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const con = require('./config/db.config');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use (bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Bienvenue');
});

const bookRoutes = require('./routes/books.routes');

const userRoutes = require('./routes/users.routes')

app.use(userRoutes);
app.use(bookRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
  setInterval(function() {
    con.query('SELECT 1');
  }, 5000);
});