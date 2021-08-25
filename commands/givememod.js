module.exports = {
    name: 'givememod',
    description: "this is a command",
    execute(msg, args) {
        msg.reply('Youre a mod now! AHAHHAHAHA!');
        msg.member.roles.add('840247579367440394');
    }
}