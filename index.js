require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');


const TOKEN = process.env.DISCORD_TOKEN;
const SERVER_ID = process.env.SERVER_ID;

const {PREFIX} = require("./helpers");


const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Ready!');
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get(SERVER_ID).send(`Hey ${member.displayName}, Welcome to a Harmonious Server !!🤝`);
});


client.on('message', message => {

    if (!message.content.startsWith(PREFIX) || message.author.bot || message.author === client.user) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command.');
    }


})

client.login(TOKEN);
