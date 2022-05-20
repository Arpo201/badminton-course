const mongoose = require("mongoose")
const LoginSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    }
})

const login = new mongoose.model("login", LoginSchema, "user")
module.exports = login;