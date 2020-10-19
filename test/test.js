const assert = require('assert')
const { generateDessert, generateYummyDessert } = require('../index')

describe('dessertGenerator', () => {
  describe('generateDessert', () => {
    it('should return a dessert which is a string', () => {
      const dessert = generateDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })
  })

  describe('generateYummyDessert', () => {
    it('should return a dessert and adjective which are both string', () => {
      const dessert = generateYummyDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })
  })
})
