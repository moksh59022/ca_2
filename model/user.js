
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_dob:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('user',userSchema);