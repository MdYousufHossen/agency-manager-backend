const mongoose=require("mongoose");
require("dotenv").config()
const app=require("./app")
const Messages = require("./models/chatApp/Message");
mongoose.connect(process.env.DTABASE_LOCAL).then(()=>{
    console.log("Database connection is successfull")
})
const port =process.env.PORT||8080;
const server= app.listen(port,  () =>{
  console.log("listening on port "+port);
});

  /** Create HTTP server. */
  // socket >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const io = require("socket.io")(server, {
    allowEIO3: true,
    cors: {
      origin:true,
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

// securety check..................
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.conversationId;
    // const payload = await jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {console.log(err)}
});
// conection check>>>.>>>>>>>>>>>>>>
global.io= io;
let interval;
io.on("connection", async(socket) => {
  console.log("Connected: " + socket.id);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
    socket.broadcast.emit("callEnded")
  });


	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

  if (interval) {
    clearInterval(interval);
}
});
