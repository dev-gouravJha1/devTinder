const express = require("express");
const app = express();

// app.use("/getData",(req,res)=>{
//     res.send("Hll")
// })
app.get("/user",(req,res)=>{
    res.send({name:"Gourav",lastName:"Jha"})
})
app.post("/user",(req,res)=>{
    res.send("Data updated")
})
app.put("/user",(req,res)=>{
    res.send("data update successfuly")
})
app.delete("/user",(req,res)=>{
    res.send("Data delete successfuly")
})

app.listen(3000,()=>{
    console.log("Server is running")
})
