const mongoose = require('mongoose');


const connectDataBase =()=>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce")
    const db= mongoose.connection
    db.on('error',(err)=>console.log(err))
    db.once('open',()=>console.log("Database created...."))
}

module.exports=connectDataBase;