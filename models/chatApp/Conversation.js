const mongoose =require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator=require("validator");

const conversationsSchema=mongoose.Schema({
user: [{ 
  _id:ObjectId,
  email:{
    type:String,
    validate:[validator.isEmail,"Provide a valid Email"],
    trim:true,
    lowercase:true,
    required:[true,"email is required!"]
  },
  role:{
    type:String,
    enum:["user","admin","manager"],
    default:"user"
  },
  firstName:{
    type:String,
    required:[true,"first name is required"]
  },
  lastName:{
    type:String,
  required:[true,"last name is required"]
  },

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