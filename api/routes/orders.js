const express = require('express');
const { route } = require('../../app');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message : 'Orders were fetched'
    })
})

router.post('/', (req,res,next) => {
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    }
    res.status(201).json({
        message : 'Order was created',
        orderConfirm : order
    })
})

router.patch('/:orderId', (req,res,next) => {
    res.status(200).json({
        message : 'Orderd '+ req.params.orderId + ' Updates'
    })
})


router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message : 'Order '+ req.params.orderId + " deleted"
    })
})


module.exports = router