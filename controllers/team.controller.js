const { createTeamService, getTeamService } = require("../services/team.service")


exports.createTeam=async(req,res)=>{
    try{
      const team=  await createTeamService(req.body)
        res.status(200).json({
            status:"success",
            data:team,
            message:"Successfully sended"
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            error
        })
    }
    }
    
exports.getTeam=async(req,res)=>{
    try{
        const teams= await getTeamService(req.query.email)
        res.status(200).json({
            status:"success",
            data:teams
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
    }