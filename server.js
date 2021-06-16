const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Server is up and running.');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});
