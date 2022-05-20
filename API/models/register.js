const mongoose = require("mongoose")
const RegisterSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    name:{
        type: String
    },
    surname:{
        type: String
    },
    stu_id:{
        type: String
    },
    role:{
        type: String
    },
    token:{
        type: String
    }
})

const Regis = mongoose.model("Regis", RegisterSchema, "user")
module.exports = Regis