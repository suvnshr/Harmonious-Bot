module.exports = {
    name: 'clear_channel',
    description: 'Deletes the specified number of messages of this channel, defaults to 100',
    execute(message, args) {

        const messagesToDel = Number(args[0]) || 99;

        async function clear() {
            message.delete();
            const fetched = await message.channel.fetchMessages({ limit: messagesToDel });
            message.channel.bulkDelete(fetched);
        }

        clear();
    },
};
