//pp: FyT9EgJ8HCUrRNEE
//MONGODB CONNECTION: mongodb+srv://<username>:<password>@cluster0-yiwup.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const stuffRoutes = require('./routes/stuff');
const path = require('path');
          

const app = express();

mongoose.connect('mongodb+srv://toberixng:KjsLk7PzIJgRaStB@cluster0-yiwup.mongodb.net/test?retryWrites=true&w=majority')
.then(() => {
console.log('Successfully connected to the MongoDB Atlas!')
})
.catch((error) => {
    console.log('Unable to connect to MongoDb Atlas!');
    console.error(error);
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
