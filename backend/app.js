const express = require('express');

const app = express();
app.use(express.json())

// Route Imports 
const productRoutes =require("./routes/ProductRoute.js");
app.use("/",productRoutes)
const userRoutes =require("./routes/UserRoute.js")
app.use("/user",userRoutes)
module.exports = app;