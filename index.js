const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Test running");
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const Discord = require("discord.js")
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
});
client.once('ready', () => {

  client.user.setPresence({ activities: [{ name: 'o!help' }], status: 'idle' });
	console.log('Bot is online');
  const channel = client.channels.cache.get('935144122019373086');
  channel.send('I am online');
});

const fs = require("fs");
const prefix = "o!"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return message.channel.send({content: "What are you talking about mate? There ain't a command like that."})
    command.run(client, message, args)
  }
})

client.login(process.env.token);