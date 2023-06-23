const Team = require("../models/Team")

exports.createTeamService=async(teamInfo)=>{
    const team=await Team.create(teamInfo)
    return team
}

exports.getTeamService=async()=>{
    const teams=await Team.find({}).populate({
        path:'user',
        select:"-password -confirmationToken -confirmationTokenExpires"
    }).exec()
    return teams;
}
exports.updateTeamService=async(teamId,newMember)=>{
    const teams=await Team.updateOne({_id:teamId},{$push:{user:newMember}},{ runValidators: true })
    return teams;
}
exports.deleteTeamService=async(teamId)=>{
    const teams=await Team.deleteOne({_id:teamId});
    return teams;
}
