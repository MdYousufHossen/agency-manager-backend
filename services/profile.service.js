const User = require("../models/User")

exports.profileUpdateService=async(req)=>{
    const filter=await req.query.email
    const user = await User.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true // Make this update into an upsert
      })
};
