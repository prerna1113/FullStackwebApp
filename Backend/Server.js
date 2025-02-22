


const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT=8080;

mongoose.connect('mongodb://localhost:27017/crud')

const UserSchema = new  mongoose.Schema({
    name:String,
    age:Number
})

const UserModel = mongoose.model("users",UserSchema)

app.get('/getUsers',(req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
});


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}}`);
});
