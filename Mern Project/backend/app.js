const express = require("express");
const app = express();
const path = require("path");


const errorMiddleware = require("./middleware/error");

app.use(express.json())

//Route Import
const product = require("./routes/productRoute");

app.use("/api/v1",product);

//Middleware for Errors
app.use(errorMiddleware);

module.exports = app