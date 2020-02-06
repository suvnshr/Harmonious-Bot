const {randomItem} = require('../helpers');

module.exports = {
	name: 'cheer',
	description: 'A command for cheering up the coders in the channel',
	execute(message, args) {

        cheer_messages = [
            'Get 💻 coding clan  🔊!!!',
            'Put that 🎧 on and lets write code !!! 💻',
        ];

        message.channel.send(
            randomItem(cheer_messages)
        );
	},
};