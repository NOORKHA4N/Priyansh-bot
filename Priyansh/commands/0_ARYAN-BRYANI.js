const fs = require("fs");
module.exports.config = {
  name: "Bryani",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Biryani") ||
     react.includes("biryani") || react.includes("bryani") || react.includes("BRYANI") ||
react.includes("Bryani") ||
react.includes("BIRYANI") ||     
react.includes("bryani")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐈 𝐁𝐑𝐘𝐀𝐍𝐈 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐒𝐀𝐌𝐄𝐄𝐑𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/noprefix/0f0424c034c8912742204bb3bf13c90c.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍗", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
