const express =require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//routes
const userRoute=require("./routes/user.route");
const conversationRoute=require("./routes/conversation.route");
const messageRoute=require("./routes/message.route");
const teamRoute=require("./routes/team.route");
const projectRoute=require("./routes/project.route");
const taskRoute=require("./routes/task.route");


app.get("/",(req,res)=>{
    res.send("Route is working! YAY!");
})

app.use("/api/v1/user",userRoute);
app.use("/api/v1/chat",messageRoute);
app.use("/api/v1/chat",conversationRoute);
app.use("/api/v1/team",teamRoute)
app.use("/api/v1/project",projectRoute)
app.use("/api/v1/task",taskRoute)
/** catch 404 and forward to error handler */
// app.use('*', (req, res) => {
//     return res.status(404).json({
//       success: false,
//       message: 'API endpoint doesnt exist'
//     })
//   });

module.exports=app