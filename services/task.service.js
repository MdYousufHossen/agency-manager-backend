const Task=require("../models/Task");

exports.createTaskService=async(taskInfo)=>{
    const taskRes=await Task.create(taskInfo);
    return taskRes;

}
exports.getTaskService=async()=>{
    const taskRes=await Task.find({});
    return taskRes;

}

exports.updatedTaskService=async(taskId,status)=>{
    const taskRes=  await Task.updateOne({_id:taskId},{status:status.status},{ runValidators: true })
    return taskRes;
}
exports.deleteTaskService=async(taskId)=>{
    const task=await Task.deleteOne({_id:taskId});
    return task;
}