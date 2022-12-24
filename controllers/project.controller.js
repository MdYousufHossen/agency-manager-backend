const { createProjectService, getProjectsService, updatedProjectService } = require("../services/project.service")


exports.createProject=async(req,res)=>{
    try{
      const projectRes=  await createProjectService(req.body)
        res.status(200).json({
            status:"success",
            data:projectRes,
            message:"Successfully sended"
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            error
        })
    }
    }
    
exports.getProjects=async(req,res)=>{
    try{
        const projects= await getProjectsService()
        res.status(200).json({
            status:"success",
            data:projects
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
    }

exports.updateProject=async(req,res)=>{
    try{
        const projects= await updatedProjectService(req.query.id,req.body)
        res.status(200).json({
            status:"success",
            data:projects
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
    }