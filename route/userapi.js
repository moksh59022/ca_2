
const User = require('../model/user')

const express = require("express")

const route = express.Router()



route.post('/adduser',async(req,res)=>{
    try {
        if(req.body.user_name.isEmpty()){
           res.json("User name cannot be empty")
        }
        if(req.body.user_email.isEmpty()){
           res.json("User email cannot be empty")
        }
        
        if(req.body.user_password.length()<8||req.body.user_password.length()>16){
           res.json("Password length should be grater than 8 or less than or equal to 16")
        }
        
        const newUser = new User({
            user_name:req.body.user_name,
            user_email:req.body.user_email,
            user_password:req.body.user_password,
            user_dob:req.body.user_dob
        })
        const saveUser = await newUser.save()
        res.json(saveUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/viewuser',async(req,res)=>{
    
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route