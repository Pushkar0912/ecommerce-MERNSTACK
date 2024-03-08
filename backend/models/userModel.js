const mongoose=require("mongoose")
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"Please enter name"],
        maxLength:[25,"Name cannot exceed 25 character"],
        minLength:[5,"Name should have more than 5 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter email"],
    },
    password:{
        type:String,
        required:[true,"Please enter password"],
        minLength:[6,"Name should have more than 6 characters"],
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"7d"})
    return token;
}
module.exports = mongoose.model("user",userSchema)