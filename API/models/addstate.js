const mongoose = require("mongoose")
const AddstateSchema = new mongoose.Schema({
    detail:{
        stuInfo1:{
            type: String
        },
        stuInfo2:{
            type: String
        },
        stuInfo3:{
            type: String
        },
        stuInfo4:{
            type: String
        },
    },
    status:{
        type: Number
    }
})

const Addstate = new mongoose.model("Addstate", AddstateSchema, "courtData")
module.exports = Addstate;