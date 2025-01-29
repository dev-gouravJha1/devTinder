const express = require("express");
const app = express();

app.use("/",(req,res,next)=>{
   //here i will authenticate
   const auth = "xyz"
   if(auth=="xyz"){
    next()
   }
   else{
    res.statusCode(401)
   }
})
app.get("/user/addUser",(req,res,next)=>{
    try{
        throw new Error("user Data is missing")
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
})
app.get("/user/removeuser",(req,res,next)=>{
    res.send("User removed")
})

// app.post("/user",(req,res)=>{
//     res.send("Data updated")
// })
// app.put("/user",(req,res)=>{
//     res.send("data update successfuly")
// })
// app.delete("/user",(req,res)=>{
//     res.send("Data delete successfuly")
// })

app.listen(3000,()=>{
    console.log("Server is running")
})
