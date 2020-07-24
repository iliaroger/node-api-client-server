const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const peopleData = require('./routes/peopleData');
const imagesData = require('./routes/imagesData');
const citiesData = require('./routes/citiesData');
const articlesData = require('./routes/articlesData');
const commentsData = require('./routes/commentsData');
const moviesData = require('./routes/moviesData');
const functions = require('firebase-functions');
const db = require('./database');
const sql = require('mssql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('express server running');
});

app.get('/people', peopleData);

app.get('/stocks', imagesData);

app.get('/cities', citiesData);

app.get('/articles', articlesData);

app.get('/comments', commentsData);

app.get('/movies', moviesData);

app.get('/testroute', (req, res) => {
  sql.connect(db.config, (err) => {
    if (err) res.send(err);
    const request = new sql.Request();
    request.query('SELECT * FROM articles', (err, recordset) => {
      if (err) res.send(err);
      res.send(recordset.recordset);
    });
  });
});

exports.app = functions.region('europe-west1').https.onRequest(app);

// app.listen(port, () => {
//   console.log('app runs on port 5000');
// });
