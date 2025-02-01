const express = require("express");
const connectDB = require("./config/database")
const app = express()

const User = require("./model/user")

connectDB().then(()=>{
    console.log("DataBase connected")
    app.listen(7777,()=>{
        console.log("Server coonected ")
    })
}).catch((err)=>{
    console.log(err)
})

