const Project=require("../models/Project");

exports.createProjectService=async(projectInfo)=>{
    const projectRes=await Project.create(projectInfo);
    return projectRes;

}
exports.getProjectsService=async()=>{
    const projectRes=await Project.find({});
    return projectRes;

}

exports.updatedProjectService=async(projectId,status)=>{
    const projectRes=  await Project.updateOne({_id:projectId},{status:status.status},{ runValidators: true })
    return projectRes;
}

exports.deleteProjectService=async(projectId)=>{
    const project=await Project.deleteOne({_id:projectId})
    return project;
}