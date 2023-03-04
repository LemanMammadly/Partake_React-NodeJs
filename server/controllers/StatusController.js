const Status = require('../model/StatusSchema');

const getAllStatus=async(req,res,next)=>{
    let status;
    try {
        status=await Status.find()
    } catch (error) {
        console.log(error);
    }

    if(!status){
        return res.status(404).json({message:"No founds status"})
    }
    else{
        return res.status(200).json({status})
    }
}


const getStatus=async(req,res,next)=>{
    let status;
    const id=req.params.id;
    try {
        status=await Status.findById(id)
    } catch (error) {
        console.log(error);
    }

    if(!status){
        return res.status(404).json({message:'No found status'})
    }else{
        return res.status(200).json({status})
    }
}



const createStatus=async(req,res,next)=>{
    let status;
    const {name}=req.body;
    try {
        status=new Status({
            name
        })
        await status.save()
    } catch (error) {
        console.log(error);
    }

    if(!status){
        return res.status(500).json({message:"No create status"})
    }else{
        return res.status(201).json({status})
    }
}



const updateStatus=async(req,res,next)=>{
    const id=req.params.id;
    const {name}=req.body;
    let status;
    try {
        status=await Status.findByIdAndUpdate(id,{
            name
        })
        status=await status.save();
    } catch (error) {
        console.log(error);
    }

    if(!status){
        return res.status(404).json({message:"No update status"})
    }else{
        return res.status(200).json({status})
    }
}



const deleteStatus=async(req,res,next)=>{
    let status;
    const id=req.params.id;
    try {
        status=await Status.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }

    if(!status){
        return res.status(404).json({message:"No delete status"})
    }
    else{
        return res.status(200).json({status})
    }
}


exports.getAllStatus=getAllStatus
exports.getStatus=getStatus
exports.createStatus=createStatus
exports.updateStatus=updateStatus
exports.deleteStatus=deleteStatus