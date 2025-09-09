const mongoose = require('mongoose');
const dbconnection =async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://iqraaptech001:Hajrahoorain7860@cluster0.vwwiy07.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

        );
        console.log("Database connected successfully");

 
    }
    catch(err){
        console.log(err);
    }
}
module.exports = dbconnection;
