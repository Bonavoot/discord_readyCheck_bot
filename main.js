const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
  console.log("Ready Check online!");
});

const prefix = "!";

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split("/ +/");
  const command = args.shift().toLowerCase();

  if (command === "r") {
    message.channel.send("Ready");
  } else if (command === "moik") {
    message.channel.send("Moik is SussyBaka >:|");
  }
});

// keep this last line in file
client.login("OTU4ODgxNDYyNzIyMTI1ODg0.YkTx8w.hKJ_GXIw5fzM6wq2Rr5j2C6sgDI");
