const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();


var prefix = "1";

client.on('ready', async() => {
var server = "698465041158242306"; // ايدي السررفر
var channel = "698497593361301504";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channel.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },100);
})

client2.on('ready', async() => {
var server = "698465041158242306"; // ايدي السررفر
var channel = "698497593361301504";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channel.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },100);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login("Njk4MjU4NDkwOTMzNzcyMzUw.XpDOCw.fc0L4lOhKEO__CdKuTkcOYQwXs8");
client2.login("Njk4NDY1NDc5ODA2NjgxMTM4.XpGOzw.QlLnk3j-XsioQYkTsHZTtD5keNo")
