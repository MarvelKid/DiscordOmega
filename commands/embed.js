const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  let embed1 = new Discord.MessageEmbed()
  .setTitle("Embed title")
  .setAuthor({name: message.author.username}, {url: message.author.displayAvatarURL()})
  .setURL("https://replit.com/@DiscordBotTeam0")
  .setDescription("Embed description")
  .setFooter({text: "Embed footed"}, message.author.displayAvatarURL())
  .setThumbnail("https://cdn.discordapp.com/attachments/930103177104224337/933347100811476992/unknown.png")
  .setColor("RANDOM")
  .addField("Embed field name", "Embed field value")
  .addField("Embed field", "in the same line", true)
  .addField("Embed field", "in the same line", true)
  .setImage("https://wallpaperaccess.com/full/637258.jpg")
  .setTimestamp()

  let embed2 = new Discord.MessageEmbed()
  .setTitle("The Embeded Message (patent pending)")
  .setDescription("Just so you know, idk what patent means lol")
  .setFooter({text: "and whatever you do, say hello to omega test"})
  .setColor("RED")
  message.channel.send( { embeds : [ embed1, embed2 ], content: "The Embed Message!" })
}

module.exports.name = "embed"