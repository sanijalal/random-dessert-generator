const assert = require('assert')
const dessertGenerator = require('../index')

describe('dessertGenerator', () => {
  describe('generateDessert', () => {
    it('should return a dessert which is a string', () => {
      const dessert = dessertGenerator.generateDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })
  })

  describe('generateYummyDessert', () => {
    it('should return a dessert and adjective which are both string', () => {
      const dessert = dessertGenerator.generateYummyDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })
  })
})
