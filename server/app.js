const dotenv = require("dotenv"); 
const mongoose = require("mongoose");
const express = require("express");
const json = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// databae connection 
require("./db/conn");


app.use(express.json());
app.use(cookieParser());

dotenv.config({path : './config.env'});

const PORT = process.env.PORT || 5000;

// All router here 
app.use(require("./routes/auth"));



if(process.env.NODE_ENV === "production"){
    const path = require("path");

    app.use(express.static(path.resolve(__dirname,'client','build')));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}                                                                                                                                                                                                                                                

app.listen(PORT ,()=>{
    console.log(`Your server is running on ${PORT} port`);
})
 