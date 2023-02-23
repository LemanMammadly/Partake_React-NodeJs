const Logo = require('../model/LogoSchema');

const getAllLogos=async(req,res,next)=>{
    let logos;
    try {
        logos=await Logo.find()
    } catch (error) {
        console.log(error);
    }

    if(!logos){
        return res.status(404).json({message:"No founds logos"})
    }
    else{
        return res.status(200).json({logos})
    }
}


const getLogo=async(req,res,next)=>{
    let logo;
    const id=req.params.id;
    try {
        logo=await Logo.findById(id)
    } catch (error) {
        console.log(error);
    }

    if(!logo){
        return res.status(404).json({message:'No found logo'})
    }else{
        return res.status(200).json({logo})
    }
}



const createLogo=async(req,res,next)=>{
    let logo;
    const {img}=req.body;
    try {
        logo=new Logo({
            img
        })
        await logo.save()
    } catch (error) {
        console.log(error);
    }

    if(!logo){
        return res.status(500).json({message:"No create logo"})
    }else{
        return res.status(201).json({logo})
    }
}



const updateLogo=async(req,res,next)=>{
    const id=req.params.id;
    const {img}=req.body;
    let logo;
    try {
        logo=await Logo.findByIdAndUpdate(id,{
            img
        })
        logo=await logo.save();
    } catch (error) {
        console.log(error);
    }

    if(!logo){
        return res.status(404).json({message:"No update logo"})
    }else{
        return res.status(200).json({logo})
    }
}



const deleteLogo=async(req,res,next)=>{
    let logo;
    const id=req.params.id;
    try {
        logo=await Logo.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }

    if(!logo){
        return res.status(404).json({message:"No delete logo"})
    }
    else{
        return res.status(200).json({logo})
    }
}


exports.getAllLogos=getAllLogos
exports.getLogo=getLogo
exports.createLogo=createLogo
exports.updateLogo=updateLogo
exports.deleteLogo=deleteLogo