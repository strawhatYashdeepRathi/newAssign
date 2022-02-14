const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Product = mongoose.model("Product")


const router = express.Router();

router.get('/allprods', async (req,res)=>{
    try{
        const products = await Product.find({});
        res.json(products);
    }catch(err){

    }

})
router.get('/allprods/:id', async (req,res)=>{
    try{
        const products = await Product.findOne({_id:req.params.id});
        res.json(products);
    }catch(err){

    }

})




module.exports = router