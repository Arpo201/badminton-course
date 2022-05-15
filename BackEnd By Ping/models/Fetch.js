const mongoose = require("mongoose")
const FetchSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    state:[{
        detail:{
            stuInfo1 : {
                type: String
            },
            stuInfo2 : {
                type: String
            },
            stuInfo3 : {
                type: String
            },
            stuInfo4 : {
                type: String
            }
        },
        status:{
            type: Number
        },
        index:{
            type: Number
        }
    }]
})

const Users = mongoose.model('Users', FetchSchema, 'courtData')
module.exports = Users