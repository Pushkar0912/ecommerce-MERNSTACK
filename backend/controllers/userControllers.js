const userModel = require("../models/userModel");
const validator=require("validator")
const bcrypt = require("bcrypt");


//Register a User
exports.registerUser=async (req,res)=>{
    // validate user req body (username and password)
    try {
        const {username, email, password}=req.body;
        
        // Check if the email is valid
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address"
            });
        }
        const hashPassword = await bcrypt.hash(password,10)
        const user = await userModel.create({
            username,
            email,
            password:hashPassword,
            avatar:{
                public_id:"this is sample id",
                url:"sampleurl"
            }
        })
        const token = user.generateAuthToken()
        res.status(201).json({
            success:true,
            message:"user created succesfully",
            id:user._id,
            username:user.username,
            email:user.email,
            token:token
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("internal server error")
    }
}

exports.loginUser = async(req,res)=>{
    try {
        const {username,password}=req.body;
        // Check if the username and password is valid
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter username and password"
            });
        }
        const user = await userModel.findOne({username})
        if (!user){
            return res.status(400).json({
                success: false,
                message: "Invalid User"
            });
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }
        
        const token = user.generateAuthToken()
        res.status(201).json({
            success:true,
            message:"Login succesfully",
            token:token
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("internal server error")
    }

}