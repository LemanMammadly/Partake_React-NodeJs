const mongoose=require('mongoose')


const LogoSchema= new mongoose.Schema(
    {
        img:{
            type:Array,
            required:true
        }
    },
    {timestamps:true}
);


module.exports = mongoose.model('Logo', LogoSchema);