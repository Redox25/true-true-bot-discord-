module.exports = {
    name: 'false',
    description: "this is a command",
    execute(msg, args) {
        msg.reply('not true');
    }
}