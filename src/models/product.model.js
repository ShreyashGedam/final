const mongoose = require("mongoose")

const productschema  = new mongoose.Schema(

    {
        title : {type : String , required : true},
        price : { type : Number , required : true},
        userid : {type : mongoose.Schema.Types.ObjectId, ref :"user" , required : true}
    },
    {
        versionKey : false,
        timestamps : true
    }
) 

const Product = mongoose.model("product", productschema)

module.exports = Product