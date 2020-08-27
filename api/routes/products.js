const express = require('express');
const { route } = require('../../app');
const router = express.Router();
const product = require('../models/product');

router.get('/', (req,res,next) => {
    product.products(function(results){
        if(results){
            res.status(200).json({
                productList : results
            })
        }
        else{
            res.status(500).json({
                errorMessage : "Null List"
            })
        }
    })
})

router.post('/', (req,res,next) => {
    const productInfo = {
        name : req.body.name,
        price : req.body.price
    }

    product.storeProduct(productInfo, function(status){
        if(status){
            res.status(200).json({
                message : "Product Successfully Stored in DB",
                newProduct : productInfo
            })
        }     
    })
})

router.get('/:productId', (req,res,next) => {
    const id = req.params.productId;

    product.getProductInfo(id, function(results){
        if(results){
            res.status(200).json({
                message : "Product Info",
                productInfo : results
            })
        }
        else{
            res.status(500).json({
                message : "Not Found"
            })
        }
    })

})
    
router.patch('/:productId', (req,res,next) => {
    const Id = req.params.productId
    // res.status(200).json({
    //     message : 'Product of '+ productId + ' successfully Updated'
    // })
    const productInfo = {
        productName : req.body.name,
        productPrice : req.body.price
    }
    product.updateProduct(Id,productInfo, function(status){
        if(status){
            res.status(200).json({
                message : "Product Successfully Updated"
            })
        }
        else{
            res.status(500).json({
                message : 'Product Not Updated.Internal Error'
            })
        }
    })
})


router.delete('/:productId', (req,res,next) => {
    const productId = req.params.productId
    
    product.destroyProduct(productId, function(status){
        if(status){
            res.status(200).json({
                message : 'Product Successfully Deleted'
            })
        }
        else{
            res.status(500).json({
                message : 'Product Not Deleted. Internal Error'
            })
        }
    })
})

module.exports = router