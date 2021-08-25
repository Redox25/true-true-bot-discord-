const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODc5MjMzMTM0NTczNTQzNDQ1.YSMvqg.uB_qEnFIG7oglt4pVhUb1llFJq0');
client.on('ready', readyDiscord);
function readyDiscord() {
    console.log('yes!');
}

const fs = require('fs');
const { fileURLToPath } = require('url');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name,command)
}




const prefix = 'tt '


client.on('message',getMessage);
function getMessage(msg) {

    if(!msg.content.startsWith(prefix)||msg.author.bot) {
        return;
    }

    const cmds = `
    Commands for True True Bot: 
    
    1. tt help - for to show the list of commands of this bot
    2. tt devinfo - for displaying the version info
    3. tt devcreds - for to show the credits for the development of the bot
    4. tt true - for replying back "true true"
    5. tt false - for replying back "not true"
    6. tt gif - for a special gif
    `
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'gif') {
        client.commands.get('gif').execute(msg, args);
    }

     else if(command === 'true') {
        client.commands.get('true').execute(msg, args);
    } 

    else if(command === 'false') {
        client.commands.get('false').execute(msg, args);
    }

    else if(command === 'devcreds') {
        client.commands.get('devcreds').execute(msg, args);
    }

    else if(command === 'devinfo') {
        client.commands.get('devinfo').execute(msg, args);
    }

    else if(command === 'help') {
        client.commands.get('help').execute(msg, args);
    }

    else if(command === 'titty') {
        client.commands.get('titty').execute(msg, args);
    }
    else if(command === 'modcheck') {
        client.commands.get('modcheck').execute(msg, args);
    }

}