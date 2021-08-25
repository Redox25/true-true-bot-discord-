const cmds = `
Commands for True True Bot: 

1. tt help - for to show the list of commands of this bot
2. tt devinfo - for displaying the version info
3. tt devcreds - for to show the credits for the development of the bot
4. tt true - for replying back "true true"
5. tt false - for replying back "not true"
6. tt gif - for a special gif
`
module.exports = {
    name: 'help',
    description: "this is a command",
    execute(msg, args) {
        msg.reply(cmds);
    }
}
