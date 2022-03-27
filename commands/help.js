const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Total Commands: ${client.commands.size}`)
  .setDescription(commands)
  .setFooter({text: "My prefix is o!"})
  .setColor("GREEN")
  message.channel.send({embeds: [embed]})
}

module.exports.name = "help"