// Load up the discord.js library
const Discord = require("discord.js");

/*
 DISCORD.JS VERSION 12 CODE
*/


const http = require("http");
 
const server = http
 .createServer((req, res) => {
 res.end(
 "Hello! This is the webserver for the discord bot on " +
 process.env.PROJECT_DOMAIN
 );
 })
 .listen(3000);
 
console.log("WebServer is online!");


// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity("Monitoring KEC74 (IND)");
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if (!message.content.startsWith(config.prefix)) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.

  if (command === "svr") {
    var d = new Date();
    var n = d.getUTCDate();
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    // And we get the bot to say the thing:
    message.channel.send(
      "```Originated at " + d + "\n\n================================================\n\n" + "The National Weather Service has issued a SEVERE THUNDERSTORM WARNING for the following counties/areas in Indiana: " + sayMessage + ". (" + config.stationid + ")```"
    );
  }
  
  if (command === "tor") {
    var d = new Date();
    var n = d.getUTCDate();
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    // And we get the bot to say the thing:
    message.channel.send(
      "```Originated at " + d + "\n\n================================================\n\n" + "The National Weather Service has issued a TORNADO WARNING for the following counties/areas in Indiana: " + sayMessage + ". (" + config.stationid + ")```"
    );
  }
  
  if (command === "rwt") {
    var d = new Date();
    var n = d.getUTCDate();
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    // And we get the bot to say the thing:
    message.channel.send(
      "```Originated at " + d + "\n\n================================================\n\n" + "The National Weather Service has issued a REQUIRED WEEKLY TEST for the following counties/areas in Indiana: " + sayMessage + ". (" + config.stationid + ")```"
    )
  };
  
   if (command === "rawmsg") {
    var d = new Date();
    var n = d.getUTCDate();
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    // And we get the bot to say the thing:
    message.channel.send(
      "```Originated at " + d + "\n\n================================================\n\n" + sayMessage + "```"
    )
  };
  
});

client.login(config.token);
