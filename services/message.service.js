const Messages = require("../models/chatApp/Message");
const Conversations = require("../models/chatApp/Conversation")

exports.createMessageService=async(messageInfo)=>{
    const messageRes=await Messages.create(messageInfo);
   await Conversations.updateOne({_id:messageInfo.conversationId},{lastMessage:messageInfo.message},{ runValidators: true })
    const updateConversation= await Conversations.findOne({_id:messageInfo.conversationId})
     await global.io.emit("message",{
        data:messageRes
       })
     await global.io.emit("conversation",{
        data:updateConversation
       })
    return messageRes;
    }
exports.getMessageService=async(filters, queries)=>{
    // {conversationId:conversationId}
    console.log(filters)
    const messageRes=await Messages.find(filters)
    // .skip(queries.skip)
    // .limit(queries.limit)
    // .select(queries.fields)
    .sort(queries.sortBy)
    const messageCount=await Messages.find(filters).count();

    console.log("messageResponse===>",messageCount)
    return {
        totalCount:messageCount,
        messages:messageRes
    };
    }