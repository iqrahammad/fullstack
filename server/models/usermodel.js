const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name : String,
    message : String
})

module.exports = mongoose.model("User", userModel);