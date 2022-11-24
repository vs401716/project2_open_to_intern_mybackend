const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim : true,
        lowercase: true
    },
    email:{
        type : String,
        required : true,
        unique : true,
        trim: true
    },
    mobile:{
        type: String,
        unique: true,
        required: true,
        trim: true
        
  },
  collegeId:{
    type: ObjectId,
    ref:"College",
    trim: true
  },
  isDeleted:{
    type:Boolean,
    default: false
  }
}, {timestamps: true})

module.exports = mongoose.model("Intern", internSchema)
