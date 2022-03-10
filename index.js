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
//   client.user.setStatus('idle');
  client.user.setPresence({ activities: [{ name: 'o!help' }], status: 'idle' });
	console.log('Bot is online');
  const channel = client.channels.cache.get('935144122019373086');
  channel.send('I am online');
});

client.on('message', message => {
  const user = message.mentions.users.first();
if(message.content === "ping"){
  message.channel.send("pong")
} else if (message.content.startsWith("o!ban")) {if (message.member.hasPermission("BAN_MEMBERS")) {

  
    if (user) {
        try {
          mesasge.guild.members.ban(user);
        } catch {
            message.reply("I do not have permissions to ban" + user);
        }
    } else {
        message.reply("You do not have permissions to ban" + user);
    }
}} else if (message.content.startsWith("o!kick")) {if (message.member.hasPermission("KICK_MEMBERS")) {
    if (user) {
        try {
            user.kick();
        } catch {
            message.reply("I do not have permissions to kick " + user);
        }
    } else {
        message.reply("You do not have permissions to kick " + user);
    }
}}
});

client.login(process.env.token);
//ARGH!!!!!!!!!!!!!!!!!!!!!!!!!!!!