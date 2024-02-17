const mongoose = require("mongoose");

const url = "mongodb://localhost:27017";

mongoose.connect(url).then(()=> {
    console.log(`mongo db connected`);
}).catch((e)=>{console.log(`error founded ${e}`);})



const UserSchema = mongoose.Schema({
    username:String,
    name:String,
    password:String,
    filedata:{
        data:Buffer,
        contentType:String,
        Title:String,
        required:true,
    }
})

const Usermodelss = mongoose.model('Usermodel',UserSchema);

module.exports = UserSchema