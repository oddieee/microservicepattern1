const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/userDB" {
    userNewUrlParser:true,
    useUnifiedTopology: true
});

const User = mongoose.model("User",{
    name :String,
    email : String
});

app.get('/users', async (req, res) =>{
    try {
        const users =await User.find();
        res.json(users);
    } catch (err){
        res.status(500).send(err);
    }
});

app.post('/users', asnyc (req,res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    }catch (err){
        res.status(400).send(err);
    }
});

app.listen(PORT, ()=>{
    console.log('User service is running on port ${PORT');
});