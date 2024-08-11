import mongoose from "mongoose";
const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"place enter the name"],
    },
    email:{
        type:String,
        required:[true,"place enter the email"],
    },
    password:{
        type:Number,
        required:true,
    },
    confirmPassword:{
        type:Number,
        required:true,
    },
})
const Product=mongoose.model("Product",ProductSchema);
module.exports=Product;