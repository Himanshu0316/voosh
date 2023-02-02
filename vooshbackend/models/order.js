const express = require("express");
const mongoose = require("mongoose")
const {Schema,model} = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:{type:String,required:true,},
    createdAt: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    img:{type:String,required:true,},
    user_id:{type:String,required:true,},
    category:{type:String},
    cost:{type: Number,required: true}
})


const Orders =  mongoose.model("Orders",orderSchema);
module.exports = Orders;
