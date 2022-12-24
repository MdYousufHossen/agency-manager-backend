const mongoose=require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator=require("validator");

const projectSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a valid name"],
        trim:true,
        minLength:[3,"Name must be at least 3 characters."],
        maxLength:[20, "Name is too large"]
    },
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
    author:{ 
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
        }
      },
    status:{
        type:String,
        enum:["Backlog","Ready","Doing","Review","Blocked","Done"],
        default:"Backlog"
    }
},{ timestamps: true})

const Project=mongoose.model("Project",projectSchema)
module.exports=Project;