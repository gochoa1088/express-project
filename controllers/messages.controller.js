const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
  // res.send("<ul><li>Hey dude!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages..");
}

module.exports = {
  getMessages,
  postMessage,
};
