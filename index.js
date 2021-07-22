//include discord.js library nodes
const Discord = require('discord.js');

// creating our discord bot object named client
const client = new Discord.Client();

// prefix (Initiate a command)
const prefix = '-';

// to access other JS files 
const fs = require('fs');

// create collection of commands sotred
client.commands = new Discord.Collection();

// make sure they are Javascript files
// telecode commands in folders
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// loop through files and check for correct file being used 
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}

// come online
client.once('ready', () => {
    console.log('Florida Man Bot has arrived!');
});

// our events
client.on('message', message => {
    // check if message started with prefix or author wrote message to continue

    // will break if message does not start with prefix & if author is the bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //splice for multiple commands
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // commands
    if (command === 'ping') {
        message.channel.send('ping ping');
    } else if (command == 'youtube') {
        message.channel.send('https://www.youtube.com');
    }


});





//login
//keep at end of file, last line 
client.login('ODY3Mjc1ODY3MTM0MjMwNTY5.YPevlw.ojrBUDaCChHGuEV2Xdl82HQ4v_c');