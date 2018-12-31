const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!iu "

client.on('ready',() => {
  console.log("I\'m Online !");
  client.user.setActivity('TeamCo7 servers | !iu help', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'TeamCo7 servers | !iu help'}`))
    .catch(console.error);
})

client.on('message', message => {

  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'ping')) {
  		message.channel.send('pong! I can\'t know the ping. IU is still in BETA version! \n But we still hunt!');
  	}
    if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send('Hi! This bot belongs to TeamCo7 Clan Inspection Unit (IU) \n An authority in charge of hunting cheaters, hackers, rule breakers & corrupt groups \n !iu ping - pong \n !iu help - This message \n Discord server: https://discord.gg/67gbBKH');
  	}
});
//  
client.login(process.env.BOT_TOKEN);
