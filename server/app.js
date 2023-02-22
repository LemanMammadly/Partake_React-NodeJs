const express=require('express');
const moongoose=require('mongoose');
var cors=require('cors')
const app=express();
const dotenv=require('dotenv');
const { default: mongoose } = require('mongoose');

const categoryRouter=require('./routes/CategoryRoutes')
const productRouter=require('./routes/ProductRoutes')

dotenv.config();


app.use(cors());
app.use(express.json());
app.use('/category',categoryRouter)
app.use('/product',productRouter)


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
    
    app.listen(5000,()=>{
        connect();
        console.log("Connected to backend!");
    } )