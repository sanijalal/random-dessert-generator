/* eslint-env mocha */

const assert = require('assert')
const { generateDessert, generateYummyDessert } = require('../index')
const { desserts } = require('../data/desserts')
const { adjectives } = require('../data/adjectives')

describe('dessertGenerator', () => {
  describe('generateDessert', () => {
    it('should return a dessert which is a string', () => {
      const dessert = generateDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })

    it('should return a dessert which inside the dessert list', () => {
      const dessert = generateDessert()
      console.info(dessert)
      assert.strictEqual(desserts.includes(dessert), true)
    })
  })

  describe('generateYummyDessert', () => {
    it('should return a dessert and adjective which is a string', () => {
      const dessert = generateYummyDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })

    it('should return a dessert with an adjective which is inside the adjectives list', () => {
      const dessert = generateYummyDessert()
      console.info(dessert)

      let isAdjectiveFound = false

      for (const adjective of adjectives) {
        isAdjectiveFound = dessert.includes(adjective)
        if (isAdjectiveFound) break
      }

      assert.strictEqual(isAdjectiveFound, true)
    })
  })
})
