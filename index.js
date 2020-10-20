const { getRandomIndex } = require('./helpers/utils')
const { adjectives } = require('./data/adjectives')
const { desserts } = require('./data/desserts')

/**
 * Generate a dessert.
 * @return {string} A random dessert name
 */
function generateDessert () {
  const dessertIndex = getRandomIndex(desserts)
  return desserts[dessertIndex]
}

/**
 * Generate a dessert with an adjective.
 * @return {string} A random dessert name with an adjective
 */
function generateYummyDessert () {
  const dessertIndex = getRandomIndex(desserts)
  const adjectiveIndex = getRandomIndex(adjectives)
  return `${adjectives[adjectiveIndex]} ${desserts[dessertIndex]}`
}

exports.generateDessert = generateDessert
exports.generateYummyDessert = generateYummyDessert
