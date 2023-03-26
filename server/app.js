const express=require('express');
const moongoose=require('mongoose');
var cors=require('cors')
const app=express();
const dotenv=require('dotenv');
const { default: mongoose } = require('mongoose');

const categoryRouter=require('./routes/CategoryRoutes')
const productRouter=require('./routes/ProductRoutes')
const logoRouter=require('./routes/LogoRoutes')
const subCategoryRouter=require('./routes/SubCategoryRouter')
const statusRouter=require('./routes/StatusRoute')

dotenv.config();


app.use(cors());
app.use(express.json());
app.use('/category',categoryRouter)
app.use('/product',productRouter)
app.use('/logo',logoRouter)
app.use('/subCategory',subCategoryRouter)
app.use('/status',statusRouter)


const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error
    }
    };

    mongoose.connection.on("disconnected",()=>{
        console.log("mongoDB disconnected");
    });
    
    app.listen(3050,()=>{
        connect();
        console.log("Connected to backend!");
    } )