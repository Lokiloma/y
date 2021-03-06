const { Client, Message, MessageEmbed } = require("discord.js");
let ownerid = "875768640320962650";
let ownerid2 = "875768640320962650";

module.exports = {
  name: "leaveserver",
  aliases: ["lvs"],
  description: "bot can leave server by this command",
  category: "owner",
  useage: "",
  accessableby: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id === "875768640320962650") {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.channel
          .send(
            new MessageEmbed()
              .setColor("RED")
              .setAuthor(message.author.tag)
              .setDescription(
                "**You Dont Have The Permissions To Use This Command! - [ADMINISTRATOR]**"
              )
              .setFooter("Made with 💖 by araan_sheikh#4416")
          )
          .then((msg) => {
            msg.delete({ timeout: 10000 });
          });
      }
    }

    const guildId = args[0];

    if (!guildId)
      return message.channel
        .send(
          new MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("**Please Provide an Guild ID **")
            .setFooter("Made with 💖 by araan_sheikh#4416")
        )
        .then((msg) => {
          msg.delete({ timeout: 10000 });
        });

    const guild = client.guilds.cache.find((g) => g.id === guildId);

    if (!guild)
      return message.channel
        .send(
          new MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setDescription("** This Guild Not Found .. **")
            .setFooter("Made with 💖 by araan_sheikh#4416")
        )
        .then((msg) => {
          msg.delete({ timeout: 10000 });
        });
    let leaved = await guild.leave();
    if (leaved) {
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setDescription(`Successfully left guild: **${guild.name}**`)
          .setFooter("Made with 💖 by araan_sheikh#4416")
      );
    } else {
      message.channel.send("i cant do....");
    }
  },
};
