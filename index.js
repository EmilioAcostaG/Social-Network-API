const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Run npm install mongodb and require mongodb and MongoClient class
// const mongodb = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.on('error', console.error.bind(console, "MongoDB connection error:"));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});