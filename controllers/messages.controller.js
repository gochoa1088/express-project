const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Aldo",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "image", "skimountain.jpg")
  // );
}

function postMessage(req, res) {
  console.log("Updating messages..");
}

module.exports = {
  getMessages,
  postMessage,
};
