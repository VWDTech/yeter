const mongoose = require("mongoose")

const passwordSchema = new mongoose.Schema({
    password:{
        type: String,
        required: true,
        trim: true
    }
},{collection: "passwords"})

const password = mongoose.model("passwords", passwordSchema)
module.exports = password