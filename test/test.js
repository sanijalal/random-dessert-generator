const assert = require('assert')
const dessertGenerator = require('../index')

describe('dessertGenerator', function() {
  describe('generateDessert', function() {
    it('should return a dessert which is a string', function() {
      const dessert = dessertGenerator.generateDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })
  })

  describe('generateYummyDessert', function() {
    it('should return a dessert and adjective which are both string', function() {
      const dessert = dessertGenerator.generateYummyDessert()
      console.info(dessert)
      assert.strictEqual(typeof dessert, 'string')
    })
  })
})
