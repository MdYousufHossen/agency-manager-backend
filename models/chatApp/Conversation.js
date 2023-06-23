const mongoose =require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator=require("validator");

const conversationsSchema=mongoose.Schema({
user:  [{
  type: ObjectId,
  ref: "User",
  required: [true,"Please provide a valid team id"],
}],
lastMessage:{
  type:String,
  required:[true,"message is required"]
},
id:ObjectId
},
{
timestamps:true
})

const Conversations=mongoose.model("Conversations", conversationsSchema)

module.exports=Conversations;