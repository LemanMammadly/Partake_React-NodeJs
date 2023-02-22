const Product = require('../model/ProductSchema');

const getAllProducts=async(req,res,next)=>{
    let products;
    try {
        products=await Product.find()
    } catch (error) {
        console.log(error);
    }

    if(!products){
        return res.status(404).json({message:"No founds products"})
    }
    else{
        return res.status(200).json({products})
    }
}


const getProducts=async(req,res,next)=>{
    let product;
    const id=req.params.id;
    try {
        product=await Product.findById(id)
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return res.status(404).json({message:'No found product'})
    }else{
        return res.status(200).json({product})
    }
}



const createProduct=async(req,res,next)=>{
    let product;
    const {name,desc,price,category,img,rating}=req.body;
    try {
        product=new Product({
            name,
            desc,
            price,
            category,
            img,
            rating
        })
        await product.save()
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return res.status(500).json({message:"No create product"})
    }else{
        return res.status(201).json({product})
    }
}



const updateProduct=async(req,res,next)=>{
    const id=req.params.id;
    const {name,desc,price,category,img,rating}=req.body;
    let product;
    try {
        product=await Product.findByIdAndUpdate(id,{
            name,
            desc,
            price,
            category,
            img,
            rating
        })
        product=await product.save();
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return res.status(404).json({message:"No update product"})
    }else{
        return res.status(200).json({product})
    }
}



const deleteProduct=async(req,res,next)=>{
    let product;
    const id=req.params.id;
    try {
        product=await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return res.status(404).json({message:"No delete product"})
    }
    else{
        return res.status(200).json({product})
    }
}


exports.getAllProducts=getAllProducts
exports.getProducts=getProducts
exports.createProduct=createProduct
exports.updateProduct=updateProduct
exports.deleteProduct=deleteProduct