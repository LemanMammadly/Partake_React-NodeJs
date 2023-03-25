const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema;


const CategorySchema= new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true
        },
        subcategory:{
            type:[ObjectId],
            ref:"SubCategory"
        }
    },
    {timestamps:true}
);


module.exports = mongoose.model('Category', CategorySchema);