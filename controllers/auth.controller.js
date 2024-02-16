import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req,res)=>{
   try {
    const {fullName, username,  password, confirmPassword, gender} = req.body;

    // password  validation
    if(password != confirmPassword){
        return res.status(400).json({error:"Passwords do not match"});
    }
    // user  already exists
    const user = await User.findOne({username});

    if(user){
        return res.status(400).json({error: 'Username already exists'})
    }
    // HASH PASSWORD HERE
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);



    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    // create a new user
    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })
    // save the user to the database
    if(newUser){
        // generate web  token and add it to the response header
    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
    });
}else{
    res.status(400).json({error:"Invalid  user data"});
}

   } catch (error) {
    console.log("Error in signup controller", error.message);
   }
}
export const login = (req,res)=>{
    console.log("login");
}
export const logout = (req,res)=>{
    console.log("logout");
}