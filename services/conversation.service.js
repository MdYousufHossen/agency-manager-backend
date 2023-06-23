const Conversations = require("../models/chatApp/Conversation")
const User = require("../models/User")

exports.createConversationService=async(conversationInfo)=>{
const conversation=await Conversations.create(conversationInfo)
const conversationRes=await Conversations.findById(conversation._id).populate({
    path:'user',
    select:"-password -confirmationToken -confirmationTokenExpires"
}).exec();
return conversationRes
}

exports.getConversationService=async(userEmail)=>{

    // const conversation=await Conversations.find({"user.email":userEmail}).sort({updatedAt:-1})
const conversation=await Conversations.aggregate([
    {
        "$lookup":{
            "from":"users",
            "localField":"user",
            "foreignField":"_id",
            "as":"user"
        }
    },
    {
        $match:{
            "user.email":userEmail
        }
    },
    {
        $project: {
            "user.password": 0,
            "user.confirmationToken":0,
            "user.confirmationTokenExpires":0
        },
          
    },
    {
        $sort: {
          updatedAt: -1
        }
    }
])
return conversation
}

exports.getConversationalUserService=async(userEmails)=>{
const conversationlUsers=await User
                            .find({"email":{"$nin":userEmails}})
                            .select('-password -confirmationToken -confirmationTokenExpires');
return conversationlUsers;
}