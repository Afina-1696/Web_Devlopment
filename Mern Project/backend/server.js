const app = require("./app");

const dotenv = require("dotenv");
// const { path } = require("./app");
const connectDatabase = require("./config/database")

//Config
dotenv.config({path:"backend/config/config.env"});


//connecting to database
connectDatabase();




app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})