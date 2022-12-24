const User = require("../models/User")

exports.signupService=async(userInfo)=>{
    const user= await User.create(userInfo);
    return user;
};

exports.findUserByEmail=async(email)=>{
    console.log(email,"email")
    return await User.findOne({email});
}
exports.findUsers=async()=>{
    return await User.find({}).select('_id email firstName lastName role updatedAt');
}
exports.findUser=async(email)=>{
    return await User.findOne({email:email}).select('_id email firstName lastName role updatedAt');
}
