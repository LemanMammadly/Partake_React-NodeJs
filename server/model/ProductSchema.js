const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema;


const ProductSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:ObjectId,
            ref:"Category"
        },
        img:{
            type:Array,
            required:true
        },
        reting:{
            type:Number,
            required:true
        }
    },
    { timestamps: true }
)


module.exports=mongoose.model("Product",ProductSchema)