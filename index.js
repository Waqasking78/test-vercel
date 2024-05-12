const express = require("express");
const app = express();
const { createServer } = require("node:http");
const { join } = require("node:path");
const server = createServer(app);
const Server = require("socket.io");

const io = Server(server);

app.use(express.static('public'));
app.get("/", function (req, res) {
  res.send("join(__dirname,)");
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(3001);
