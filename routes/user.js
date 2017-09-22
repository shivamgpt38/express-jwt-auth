const express = require('express');
const userModel = require('./../models/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./../config');
module.exports = (function(){
    'use strict';
    const router = express.Router();
    
    router.post('/sign-up',(req,res)=>{
        if(req.body.email &&
            req.body.username &&
            req.body.password){
                let user = new userModel({
                    username:req.body.username,
                    email:req.body.email
                });
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(req.body.password,salt,(err,hash)=>{
                        user.password = hash;
                        console.log(user);
                        user.save((err) =>{
                            if(err) return console.log(err);
                            res.json({msg:'created'});
                        });
                    })
                })
                
            }
    });
    router.post('/login',(req,res)=>{
        if(req.body.username &&
            req.body.password){
                let query = {username:req.body.username};
                userModel.findOne(query,(err,user)=>{
                    if(err) return console.log(err);
                    bcrypt.compare(req.body.password,user.password,(err,decode)=>{
                        if(decode === true){
                            let token = jwt.sign({user},config.secret,{
                                expiresIn:10000
                            });
                            res.json({
                                msg:'welcome',
                                token:token
                            });
                        }
                    })
                })
            }
    });
    router.get('/authprotectedroute',(req,res)=>{
        if(req.headers.authorization){
            jwt.verify(req.headers.authorization,config.secret,(err,decode)=>{
                if(err) return res.json({msg:'invalid token'});
                res.json({data:decode});
            })
        }else{
            return res.status(403).json({msg:'no token provided'});
        }
    })
    return router;
})();