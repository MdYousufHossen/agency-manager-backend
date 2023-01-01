const { createConversationService, getConversationService, getConversationalUserService } = require("../services/conversation.service")


exports.createConversation=async(req,res)=>{
try{
   const conversation= await createConversationService(req.body)
    res.status(200).json({
        status:"success",
        data:conversation,
        message:"Successfully sended"
    })
}catch(error){
    res.status(500).json({
        status:"error",
        error
    })
}
}

exports.getConversation=async(req,res)=>{
try{
    const conversation= await getConversationService(req.query.email)
    res.status(200).json({
        status:"success",
        data:conversation
    })
}catch(error){
    res.status(500).json({
        status:"failed",
        error
    })
}
}

exports.getConversationalUser=async(req,res)=>{
    try{
        const conversationalUser= await getConversationalUserService(req.body)
        res.status(200).json({
            status:"success",
            data:conversationalUser
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
    }