const express = require("express");
const path = require("path");
const cors = require("cors");
const sequelize = require("./config/connection");
const routes = require("./routes");
const app = express();
const { instrument } = require("@socket.io/admin-ui");
const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://127.0.0.1:5173", "https://admin.socket.io"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message, room) => {
    if (room === "") {
      socket.broadcast.emit("receive-message", message);
    } else {
      io.in(room).emit("receive-message", message);
    }
  });
  socket.on("join-room", (room) => {
    socket.join(room);
  });
});

instrument(io, {
  auth: false,
});

const PORT = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

// app.use(express.static(path.join(__dirname, )))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is live at http://localhost:${PORT}/`)
  );
});
