const { profileUpdateService } = require("../services/profile.service")

exports.profileUpdate=async(req,res)=>{
    try{
       const data=await profileUpdateService(req)
        res.status(200).json({
            status:"success",
            message:"Successfully",
            data:data
        })
    }catch(error){
      
        res.status(500).json({
            status:"fail",
            error,
        })
    }
}