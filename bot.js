var Discord = require('discord.js');
var bot = new Discord.Client();
const fs = require('fs');

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //Basic---Command
  if (msg === prefix + 'CC') {
    message.channel.send( 'The Bot has connected!' )
  }
  
  //Eco System
  if (!userdata[sender.id + message.guild.id])  userdata[sender.id + message.guild.id] = {}
  if (!userdata[sender.id + message.guild.id].money) userdata[sender.id + message.guild.id].money = 100;
  //Eco System---Command
  if (msg === prefix + 'Money') {
    message.channel.send(userdata[sender.id + message.guild.id].money)
  }
});

//Event
bot.login(process.env.bot_token);
