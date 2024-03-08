const app =require("./app");
const connectDataBase = require("./createDatabase");
require('dotenv').config();

const port = process.env.PORT || 3000; // Use port 3000 as a default if PORT is not specified

// connect to database
connectDataBase()


// start server
app.listen(port,()=>{
    console.log(`server listning on Port:${port}`)
})