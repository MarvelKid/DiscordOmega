module.exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send({content: "Give me something to speak!"})
  message.channel.send({content: toSay})
}

module.exports.name = "say"