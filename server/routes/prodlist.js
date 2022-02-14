const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model("Product")


router.get('/', (req,res)=>{
    Product.find()
    .then(products=>{
        res.json({products})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/search-prods',(req,res)=>{
    let userPattern = new RegExp("^"+req.body.query)
    Product.find({title:{$regex:userPattern}})
    .select("_id email")
    .then(products=>{
        res.json({products})
    }).catch(err=>{
        console.log(err)
    })

})



module.exports = router