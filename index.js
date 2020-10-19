const utils = require('./helpers/utils');

const { desserts, adjectives } = require('./data/data.js');
/**
 * Generate a dessert.
 * @return {string} A random dessert name
 */
function generateDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    return desserts[dessertIndex];
}

/**
 * Generate a dessert with an adjective.
 * @return {string} A random dessert name with an adjective
 */
function generateYummyDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    const adjectiveIndex = utils.getRandomIndex(adjectives);
    return `${adjectives[adjectiveIndex]} ${desserts[dessertIndex]}`;
}

exports.generateDessert = generateDessert;
exports.generateYummyDessert = generateYummyDessert;
