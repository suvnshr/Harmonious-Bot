const faker = require("faker");
const { randomItem, spacesToUnderScores } = require('../helpers');



module.exports = {
    name: 'variable_name',
    description: 'Generate a random variable name',
    execute(message, args) {
        random_variable = randomItem([
            faker.hacker.noun(),
            faker.hacker.verb(),
            faker.hacker.abbreviation(),
        ]);

        random_variable = spacesToUnderScores(random_variable);

        message.channel.send(
            random_variable
        );
    },
};