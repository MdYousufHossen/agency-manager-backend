const mongoose=require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator=require("validator");
const messageSchema=mongoose.Schema({
conversationId:ObjectId,
sender:{
  type: ObjectId,
  ref: "User",
  required: [true,"Please provide a valid team id"],
   },
receiver: {
  type: ObjectId,
  ref: "User",
  required: [true,"Please provide a valid team id"],
   },
message:{
    type:String,
    required:[true,"message is required"]
  },
id:ObjectId
},{
    timestamps:true
})


const Message=mongoose.model("Message",messageSchema)
module.exports=Message;