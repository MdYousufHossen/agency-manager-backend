const Conversations = require("../models/chatApp/Conversation")
const User = require("../models/User")

exports.createConversationService=async(conversationInfo)=>{
const conversation=await Conversations.create(conversationInfo)
return conversation
}
exports.getConversationService=async(userEmail)=>{
const conversation=await Conversations.find({"user.email":userEmail}).sort({updatedAt:-1})
return conversation
}

exports.getConversationalUserService=async(userEmails)=>{
const conversationlUsers=await User
                            .find({"email":{"$nin":userEmails}})
                            .select('_id email firstName lastName role updatedAt');
return conversationlUsers;
}