/* Requirements */
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
// models from index.js
const db = require('./models');

/* Express App */
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// add logger
app.use(logger('dev'));
// Router
app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

/* Mongoose Connection to DB */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutTrackerDB', { useNewUrlParser: true });

/* Start Server! */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});