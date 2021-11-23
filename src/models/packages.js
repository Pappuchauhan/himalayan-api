const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    }, event:{
        type:String,
        default:"100m",
        trim:true
    }
})

const Package = new mongoose.model("Package",packageSchema);

module.exports= Package;