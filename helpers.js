module.exports.PREFIX = "!";
module.exports.randomItem = items => items[Math.floor(Math.random() * items.length)];
module.exports.spacesToUnderScores = string => string.split(' ').join('_');
