/* Requirements */
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

/* Express App */
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// add logger
app.use(logger('dev'));
// Router
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

/* Mongoose Connection to mLab MongoDB on Heroku */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:dbpassword123@ds129098.mlab.com:29098/heroku_1fk4w2fn', { useMongoClient: true, useNewUrlParser: true, useFindAndModify: false });

// Use this for dev environment
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useMongoClient: true, useNewUrlParser: true, useFindAndModify: false });

/* Start Server! */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});