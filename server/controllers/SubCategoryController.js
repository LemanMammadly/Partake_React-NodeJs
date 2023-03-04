const SubCategory = require('../model/SubCategorySchema');

const getAllSubCategories=async(req,res,next)=>{
    let subcategories;
    try {
        subcategories=await SubCategory.find()
    } catch (error) {
        console.log(error);
    }

    if(!subcategories){
        return res.status(404).json({message:"No founds subcategories"})
    }
    else{
        return res.status(200).json({subcategories})
    }
}


const getSubCategories=async(req,res,next)=>{
    let subcategory;
    const id=req.params.id;
    try {
        subcategory=await SubCategory.findById(id)
    } catch (error) {
        console.log(error);
    }

    if(!subcategory){
        return res.status(404).json({message:'No found subcategory'})
    }else{
        return res.status(200).json({subcategory})
    }
}



const createSubCategory=async(req,res,next)=>{
    let subcategory;
    const {name}=req.body;
    try {
        subcategory=new SubCategory({
            name
        })
        await subcategory.save()
    } catch (error) {
        console.log(error);
    }

    if(!subcategory){
        return res.status(500).json({message:"No create subcategory"})
    }else{
        return res.status(201).json({subcategory})
    }
}



const updateSubCategory=async(req,res,next)=>{
    const id=req.params.id;
    const {name}=req.body;
    let subcategory;
    try {
        subcategory=await SubCategory.findByIdAndUpdate(id,{
            name
        })
        subcategory=await subcategory.save();
    } catch (error) {
        console.log(error);
    }

    if(!subcategory){
        return res.status(404).json({message:"No update subcategory"})
    }else{
        return res.status(200).json({subcategory})
    }
}



const deleteSubCategory=async(req,res,next)=>{
    let subcategory;
    const id=req.params.id;
    try {
        subcategory=await SubCategory.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }

    if(!subcategory){
        return res.status(404).json({message:"No delete subcategory"})
    }
    else{
        return res.status(200).json({subcategory})
    }
}


exports.getAllSubCategories=getAllSubCategories
exports.getSubCategories=getSubCategories
exports.createSubCategory=createSubCategory
exports.updateSubCategory=updateSubCategory
exports.deleteSubCategory=deleteSubCategory