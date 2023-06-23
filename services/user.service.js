const User = require("../models/User")

exports.signupService=async(userInfo)=>{
    const user= await User.create(userInfo);
    return user;
};

exports.findUserByEmail=async(email)=>{
    return await User.findOne({email});
}
exports.findUsers=async()=>{
    return await User.find({}).select('_id email firstName lastName role updatedAt imageURL');
}
exports.findUser=async(email)=>{
    return await User.findOne({email:email}).select('_id email firstName lastName role updatedAt imageURL');
}

exports.updatedUserService=async(req)=>{
    const email=req.query.email
    const image=req.file && req.file.path;
    const { firstName, lastName } = req.body;
    const updateData = {};

    if (image) {
    updateData.imageURL = image;
    }
    if (firstName) {
    updateData.firstName = firstName;
    }
    if (lastName) {
    updateData.lastName = lastName;
    }

    const res=await User.updateOne({email:email},updateData,{ runValidators: true })
    const find=await User.findOne({email:email})
    return find
}
