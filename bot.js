var Discord = require('discord.js');
var bot = new Discord.Client();
const fs = require('fs');

//JSON file
let userdata = JSON.parse(fs.readFileSync('Storage/userdata.json', 'utf8'));

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //command
    if (msg === prefix + 'CC') {
      message.channel.send('Connected BOT!')
    }
  //Eco System
    if (!userdata[sender.id + message.guild.id])  userdata[sender.id + message.guild.id] = {}
    if (!userdata[sender.id + message.guild.id].money) userdata[sender.id + message.guild.id].money = 100;

  
});

bot.login(process.env.BOT_TOKEN);
