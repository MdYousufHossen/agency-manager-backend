const mongoose=require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator=require("validator");

const taskSchema=mongoose.Schema({
    description:{
        type:String,
        required:[true,"Please provide a description"],
        trim:true,
        minLength:[20,"description must be at least 20 characters."],
        maxLength:[75, "Name is too large"]
    },
    team:{
      name: {
        type:String,
        required: [true,"Please provide a valid team name"],
      },
      id: {
        type: ObjectId,
        ref: "Teams",
        required: [true,"Please provide a valid team id"],
      }
    },
    project:{
      name: {
        type:String,
        required: [true,"Please provide a valid team name"],
      },
      id: {
        type: ObjectId,
        ref: "Teams",
        required: [true,"Please provide a valid team id"],
      }
    },
    author:{ 
      
        type: ObjectId,
        ref: "User",
        required: [true,"Please provide a valid team id"],
      
    
        // _id:ObjectId,
        // email:{
        //   type:String,
        //   validate:[validator.isEmail,"Provide a valid Email"],
        //   trim:true,
        //   lowercase:true,
        //   required:[true,"email is required!"]
        // },
        // role:{
        //   type:String,
        //   enum:["user","admin","manager"],
        //   default:"user"
        // },
        // firstName:{
        //   type:String,
        //   required:[true,"first name is required"]
        // },
        // lastName:{
        //   type:String,
        // required:[true,"last name is required"]
        // }
      },
    status:{
        type:String,
        enum:["Backlog","Ready","Doing","Review","Done"],
        default:"Backlog"
    }
},{ timestamps: true})

const Task=mongoose.model("Task",taskSchema)
module.exports=Task;