const mongoose = require('mongoose')
const prodSchema = new mongoose.Schema({
    url:{
        type:String,
    },
    title:{
        type:String,
    },
    type:{
        type:String,
    },
    price:{
        type:Number,
    }
})

mongoose.model("Product", prodSchema)