const mongoose = require("mongoose");
const url = process.env.DATABASE;

mongoose.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true,useFindAndModify:false, useUnifiedTopology:true } ).then(()=>{
    console.log("Connection Sucessfully connect with the Database");
}).catch((err)=>{
    console.log(`Not connected error : ${err}`);
});
