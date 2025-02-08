const express = require("express");
const connectDB = require("./config/database")
const app = express()

const User = require("./model/user")

app.use(express.json())

app.post("/signup", async (req, res) => {
    //Creating a new instance of user
    console.log(req.body)
    const userData = req.body
    const user = User(
       userData
    )
    try {
        await user.save()
        res.send("User added succesfully")
    }

    catch (err) {
        res.status(400).send("Error saving in user:"+err.message)
    }
})

connectDB().then(() => {
    console.log("DataBase connected")
    app.listen(7777, () => {
        console.log("Server coonected ")
    })
}).catch((err) => {
    console.log(err)
})

