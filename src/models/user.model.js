const mongoose = require("mongoose")


const userschema = new mongoose.Schema(
    {
        name : {type : String },
        email : {type : String , required : true , unique : true},
        password : {type : String , required : true},
        role : [{type : String , required : true}]
    },
    {
        timestamps : true,
        versionKey : false
    }
)

module.exports = mongoose.model("user",userschema)