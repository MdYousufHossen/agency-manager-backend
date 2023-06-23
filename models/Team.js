const mongoose=require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator=require("validator");
const teamSchema=mongoose.Schema({
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
        maxLength:[75, "description is too large"]
    },
    user: [{
      type: ObjectId,
      ref: "User",
      required: [true,"Please provide a valid team id"],
    }],
},
{
    timestamps:true,
}
)

const Teams=mongoose.model("Teams",teamSchema)
module.exports=Teams;