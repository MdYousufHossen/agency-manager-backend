const Team = require("../models/Team")

exports.createTeamService=async(teamInfo)=>{
    const team=await Team.create(teamInfo)
    return team
}

exports.getTeamService=async()=>{
    const teams=await Team.find()
    return teams;
}