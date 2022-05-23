const mongoose = require("mongoose")
const queryUser = new mongoose.Schema({
    stu_id:{
        type: String
    }
})

const findUser = mongoose.model("findUser", queryUser, "user")
module.exports = findUser;