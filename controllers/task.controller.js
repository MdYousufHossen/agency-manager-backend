
const { createTaskService, getTaskService, updatedTaskService, deleteTaskService } = require("../services/task.service")


exports.createTask=async(req,res)=>{
    try{
      const taskRes=  await createTaskService(req.body)
        res.status(200).json({
            status:"success",
            data:taskRes,
            message:"Successfully sended"
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            error
        })
    }
    }
    
exports.getTask=async(req,res)=>{
    try{
        const task= await getTaskService()
        res.status(200).json({
            status:"success",
            data:task
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
    }

exports.updateTask=async(req,res)=>{
    try{
        const task= await updatedTaskService(req.query.id,req.body)
        res.status(200).json({
            status:"success",
            data:task
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
    }

    exports.deleteTask=async(req,res)=>{
        try{
            const task= await deleteTaskService(req.query.id)
            res.status(200).json({
                status:"success",
                data:task
            })
        }catch(error){
            res.status(500).json({
                status:"failed",
                error
            })
        }
        }