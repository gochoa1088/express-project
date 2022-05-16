const express = require("express");

const {
  postFriend,
  getFriends,
  getFriend,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

// friends middleware
friendsRouter.use((req, res, next) => {
  console.log("ip address: ", req.ip);
  next();
});

friendsRouter.post("/", postFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);

module.exports = friendsRouter;
