const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const { ObjectId } = mongoose.Schema


mongoose
  .connect(url)
  .then(() => {
    console.log("mongo db Connected at " + url);
  })
  .catch((e) => {
    console.log(e);
  });
//for storgin images
const ImgSchema = mongoose.Schema({
  name: {
    type:mongoose.Schema.Types.ObjectId
  },
  url: String,
}, {
  timestamps: true // Enable timestamps
});

///for storing users data
const Userschema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Enable timestamps
});

const Profile = mongoose.Schema({
  username:{
    type:String,
    required:true 
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  }
})

const ProfileMOdel = mongoose.model("ProfileModel" , Profile);
const UserModel = mongoose.model("UserModel", Userschema);
const ImgModel = mongoose.model("ImgModel", ImgSchema);


module.exports = { ImgModel, UserModel , ProfileMOdel}
