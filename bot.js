var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //command
    if (msg === prefix + 'CC') {
      message.channel.send('Connected BOT!')
    }
});

bot.on('ready', () => {
    console.log('Bot Launched......')
});

bot.login(process.env.BOT_TOKEN);
