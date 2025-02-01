const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namasteDev:1eDc7zbFCJ5J0VKq@devtinder.9b7a6.mongodb.net/devTinder")
}

module.exports = connectDB

