const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/error");

// Config

dotenv.config({path:"backend/config/config.env"})

// app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload());

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
// const category = require("./routes/categoryRoute")

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);
// app.use("/api/v1",category);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app
