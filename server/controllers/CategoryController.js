const Category = require('../model/CategorySchema');

const getAllCategories=async(req,res,next)=>{
    let categories;
    try {
        categories=await Category.find()
    } catch (error) {
        console.log(error);
    }

    if(!categories){
        return res.status(404).json({message:"No founds categories"})
    }
    else{
        return res.status(200).json({categories})
    }
}


const getCategories=async(req,res,next)=>{
    const id=req.params.id;
    let category;
    try {
        category=await Category.findById(id)
    } catch (error) {
        console.log(error);
    }

    if(!category){
        return res.status(404).json({message:'No found category'})
    }else{
        return res.status(200).json({category})
    }
}



const createCategory=async(req,res,next)=>{
    let category;
    const {name}=req.body;
    try {
        category=new Category({
            name
        })
        await category.save()
    } catch (error) {
        console.log(error);
    }

    if(!category){
        return res.status(500).json({message:"No create category"})
    }else{
        return res.status(201).json({category})
    }
}



const updateCategory=async(req,res,next)=>{
    const id=req.params.id;
    const {name}=req.body;
    let category;
    try {
        category=await Category.findByIdAndUpdate(id,{
            name
        })
        category=await category.save();
    } catch (error) {
        console.log(error);
    }

    if(!category){
        return res.status(404).json({message:"No update category"})
    }else{
        return res.status(200).json({category})
    }
}



const deleteCategory=async(req,res,next)=>{
    let category;
    const id=req.params.id;
    try {
        category=await Category.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }

    if(!category){
        return res.status(404).json({message:"No delete category"})
    }
    else{
        return res.status(200).json({category})
    }
}


exports.getAllCategories=getAllCategories
exports.getCategories=getCategories
exports.createCategory=createCategory
exports.updateCategory=updateCategory
exports.deleteCategory=deleteCategory