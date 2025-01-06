const express = require("express");
const mongoose = require("mongoose");
const Router = require("./router");
require("dotenv").config();

const mongoURI = process.env.DB_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err, "error while connecting to MongoDB");
  });

const app = express();
app.use(express.json());
app.use("/api", Router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started on port " + port));
