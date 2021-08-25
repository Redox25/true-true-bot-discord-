const { Message } = require("discord.js");

module.exports = {
    name: 'modcheck',
    description: "this is a command",
    execute(msg, args) {
        if(msg.member.roles.cache.has('840247579367440394')) {
            msg.reply('the fact that you are mod is TRUE TRUE');
        } else {
            msg.reply('the fact that you are mod is NOT TRUE');
        }
        
    }
}
