const mongoose = require('mongoose');

//user schema..
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName:{
        type:String,
        required:true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true 
    },
    image:{
        type:String
    },
    password: {
        type: String,
        required: true 
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    followers: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],
    followings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
    //timestamp used to record the time at which it was saved...
},{ timestampes:true });


const User = new mongoose.model('User',userSchema);

module.exports = User;