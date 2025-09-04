const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dbconnection = require('./config/db_connection');
const User = require('./models/usermodel');
const app = express();

dbconnection();
app.use(express.json());
app.use(cors());

app.post('/adduser',async(request ,response) =>{
try {
    const {name,message} = request.body;
await User.insertOne({
    name,message
});
response.status(200).send({popup : "User Added Successfully"});
    
} catch (error) {
    console.log(error);
    response.status(404).send({popup:"error in  inserting user "});
}
})
app.get('/getusers',async(request,response)=>{
    try {
        const users = await User.find({});
        response.status(200).send(users);
    
    } catch (error) {
        console.log(error);
    }
});



app.listen(3000, () => {
    console.log("Server Started");
})