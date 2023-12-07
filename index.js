const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/index');

const app = express();
const PORT = 5002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/storageApp")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/user', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
