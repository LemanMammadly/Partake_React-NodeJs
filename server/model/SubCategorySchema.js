const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema;


const SubCategorySchema= new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true
        }
    },
    {timestamps:true}
);


module.exports = mongoose.model('SubCategory', SubCategorySchema);