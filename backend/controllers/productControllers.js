const Product = require('../models/productModel');

// Creat New product-----Admin
exports.createNewProduct=async (req, res) => {
    try {
        const product = await Product.create(req.body);
        // console.log(product)
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            success: false,
            error: "Error creating product"
        });
    }
}
// Get All Product
exports.getAllProducts=async(req,res)=>{
    try{
        const product= await Product.find({})
        res.status(200).json({
            success: true,
            product
        })
    } catch(error) {
        console.error("Not Found Product:", error);
        res.status(500).json({
            success: false,
            message: "Not Found Product"
        });
    }
}
//Get Product Detail
exports.getProductDetails=async(req,res)=>{
    try{
        let product=await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success:false,
                message: "Product Not Found"
            });
        }
        res.status(200).json({
            success:true,
            product
        })
    }catch(error){
        console.error("Product Not found",error)
        res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }   
}
// Update Product-----Admin
exports.updateProduct=async(req,res)=>{
    try{
        let product=await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success:false,
                message: "Not Found Product"
            });
        }

        product=await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidator:true,
            useFindAndModify:false
        })
        res.status(200).json({
            success:true,
            message:"Product Updated Successfully"
        })
    }catch(error){
        console.error("Product Not Updated",error)
        res.status(500).json({
            success: false,
            message: "Product Not Updated"
        })
    }   
}
// Delete Product-----Admin
exports.deleteProduct=async(req,res)=>{
    try{
        let product=await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success:false,
                message: "Not Found Product"
            });
        }
        
        await Product.deleteOne({_id: req.params.id});        res.status(200).json({
            success:true,
            message:"Product deleted successfully."
        })
    }catch(error){
        console.error("Error deleting product:", error); // Log the error
        res.status(500).json({
            success: false,
            message: "Error deleting product. Please try again later."
        });
    }   
}




