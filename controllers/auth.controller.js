export const signup = (req,res)=>{
   try {
    const {fullName, username, email, password, confirmPassword, gender,phoneNumber, profilePic} = req.body;
   } catch (error) {

   }
}
export const login = (req,res)=>{
    console.log("login");
}
export const logout = (req,res)=>{
    console.log("logout");
}