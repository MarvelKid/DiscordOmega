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
//  client.user.setStatus('idle');
  client.user.setPresence({ activity: { name: "o!help" }, status: "idle"} )
	console.log('Bot is online');
  const channel = client.channels.cache.get('935144122019373086');
  channel.send('I am online');
});

client.on('message', async message => {

if(message.content === "ping"){
  message.channel.send("pong")
}



})

client.login(process.env.token);

/*smth



jjhu
help*/