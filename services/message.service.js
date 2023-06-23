const Messages = require("../models/chatApp/Message");
const Conversations = require("../models/chatApp/Conversation")

exports.createMessageService=async(messageInfo)=>{
    const message=await Messages.create(messageInfo)
    const messageRes= await Messages.findById(message._id)
    .populate({
        path: 'sender',
        select: '-password -confirmationToken -confirmationTokenExpires'
      })
      .populate({
        path: 'receiver',
        select: '-password -confirmationToken -confirmationTokenExpires'
      })
    // const messageRes=await message

  

   await Conversations.updateOne({_id:messageInfo.conversationId},{lastMessage:messageInfo.message},{ runValidators: true })

    const updateConversation= await Conversations.findOne({_id:messageInfo.conversationId}).populate({
        path:'user',
        select:"-password -confirmationToken -confirmationTokenExpires"
    }).exec()
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
  
    const messageRes=await Messages
    .find(filters)
    .populate({
        path:'sender',
        select:"-password -confirmationToken -confirmationTokenExpires"
    }).
    populate({
        path:'receiver',
        select:"-password -confirmationToken -confirmationTokenExpires"
    })
    // .skip(queries.skip)
    // .limit(queries.limit)
    // .select(queries.fields)
    .sort(queries.sortBy)
    const messageCount=await Messages.find(filters).count();

    return {
        totalCount:messageCount,
        messages:messageRes
    };
    }