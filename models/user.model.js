import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName:{
     type: String,
    require: true
},
username:{
type: String,
require: true,
unique:true
},
email:{
type:String,
require: true
},
password:{
type: String,
required:  true ,
minlength :6
},
gender:{
    type:  String,
    required: true,
    enum:["male", "female"]
},
profilePic:{
    type: String,
}
});

const User = mongoose.model("User", userSchema);
export default  User;
