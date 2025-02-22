import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const express = require('express');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    userNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=> console.log("MongoDB connected"))
.catch(err=> console.log(err));


const app = express();
const PORT=8080;



app.get('/',(req,res)=>{
    res.send('Netflix clone Api is running...');
});



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}}`);
});
