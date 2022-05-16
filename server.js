const express = require("express");
const {
  getMessages,
  postMessage,
} = require("./controllers/messages.controller");
const {
  postFriend,
  getFriends,
  getFriend,
} = require("./controllers/friends.controller");

const app = express();

const PORT = 3000;

// middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", postFriend);
app.get("/friends", getFriends);
app.get("/friends/:friendId", getFriend);

app.get("/messages", getMessages);
app.post("/messages", postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
