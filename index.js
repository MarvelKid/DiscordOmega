const express = require("express");
const app = express();
const prefix = "o!"

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!")
})

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  client.user.setStatus('idle');
	console.log('Bot is online');
  const channel = client.channels.cache.get('935144122019373086');
  channel.send('I am online');
});

client.on('message', async msg => {
  switch (msg.content) {
    case "o!ping":
      msg.reply("Pong!");
      break;

    case "o!test":
      msg.reply("You are one of the first to test the bot and have received the <@&928698378135674920> role")
   }
})

client.login(process.env.token);