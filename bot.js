var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //command
if (msg === prefix + 'CC') {
      message.channel.send( 'The Bot has connected!' )
    }
if (msg === prefix + 'UserName') {
      message.channel.send( 'To' + sender.username + 'The Bot has connected!' )
    }
  
  
  
});

//Event
bot.login(process.env.bot_token);
bot.on('')
