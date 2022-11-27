const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./models/Users.js")


app.use(express.json());
mongoose.connect("mongodb+srv://admin-amit:Test123@cluster0.raskh.mongodb.net/userListDB");

app.get('/getUsers',(req,res) => {
    User.find({},(err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })

})

app.post('/createUsers', async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.json(user)
})

app.delete('/deleteUser/:id', async (req,res) => {
    const {id} = req.params.id;
    console.log("id "+req.params.id);
    User.deleteOne(id,(err) => {
        if(err){
            res.json(err);
        }else{
            res.json("Data deletd succesfully");
        }
    });
   
})

app.listen(3001, () => {
    console.log("server started on port 3000");
})