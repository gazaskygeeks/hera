const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/mainController');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use(controllers);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;
