const express = require("express");
const app = express();

app.use("/getData",(req,res)=>{
    res.send("Hll")
})

app.listen(3000,()=>{
    console.log("Server is runnin")
})
