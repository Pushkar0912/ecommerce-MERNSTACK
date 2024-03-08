const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter name"]
    },
    description:{
        type:String,
        required:[true,"Please enter descreption"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[6,"price cannot exceed 6 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    // for img give array of object because we give only on img
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter product category"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLength:[3,"stock cannot exceed 3 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                requires:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("Products",productSchema)