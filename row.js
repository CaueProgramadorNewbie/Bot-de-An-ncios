const Discord = require("discord.js")
const {
    Client,
    Message,
    MessageActionRow,
    MessageButton,
} = require("discord.js")

const TOKEN = "OTgwNjI5OTc5MTE1MTY3NzQ0.Gucq5E.UsfPF-HhnJkPQsRBHuKJwNV1TVkOBmtgibHsZo"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        'GUILD_PRESENCES',
        'GUILD_MEMBERS'
    ]
});

client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
    console.log(`Logged in as ${client.user.tag}`)
});

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  
  module.exports.run = async (client, message) => {
    const channel01 = client.channels.cache.find(channel => channel.id === '977696004830810154');
    const row = new MessageActionRow().addComponents (
      new MessageButton()
      .setURL("https://youtu.be/3AZ2ZA6_GJg")
      .setLabel("NAME")
      .setStyle("LINK")
    );
    message.channel01.send({ content: "**HELLO THERE**", components: [row]});
  },

module.exports.help = {
  name: "Name",
  aliases: ['name'],
} 

client.login (TOKEN)