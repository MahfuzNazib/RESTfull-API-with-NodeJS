const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const user = require('../models/users');

router.post('/signup', (req, res, next) => {
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //     if(err){
    //         console.log(" Bcrypt Error :  "+err)
    //         res.status(500).json({
    //             error : err
    //         })
    //     }
    //     else{
    //         const userInfo = {
    //             userName : req.body.userName,
    //             email : req.body.email,
    //             password : hash
    //         }
            
    //         user.createUser(userInfo, function(status){
    //             if(status){
    //                 res.status(200).json({
    //                     message : "New User Created Successfully",
    //                     newUser : userInfo
    //                 })
    //             }
    //             else{
    //                 res.status(500).json({
    //                     message : 'User can not Created'
    //                 })
    //             }
    //         })
    //     }
    // })



    const userInfo = {
        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password
    }

    user.createUser(userInfo, function(status){
        if(status){
            res.status(200).json({
                message : "User Created",
                newUser : userInfo
            })
        }
        else{
            res.status(500).json({
                message : "User not Created"
            })
        }
    })
});




module.exports = router