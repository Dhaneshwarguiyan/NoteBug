const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    steps:[{
        type:String,
        required:true,
        maxlength:100
    }]
},{timestamps:true})

const Solution = new mongoose.model('Solution',solutionSchema);

module.exports = Solution;