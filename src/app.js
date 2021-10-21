// Modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const returnError = require('./middlewares/errorHandler');

// Init
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/alarm', require('./routes/alarm.routes'));

// Error middleware
app.use(returnError);

module.exports = app;