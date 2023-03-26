const mongoose=require('mongoose')


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