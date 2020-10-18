const assert = require('assert')
const dessertGenerator = require('../index')

describe('dessertGenerator', function() {
  describe('generateDessert', function() {
    it('should return a dessert which is a string', function() {
      assert.strictEqual(typeof dessertGenerator.generateDessert(), 'string')
    })
  })

  describe('generateYummyDessert', function() {
    it('should return a dessert and adjective which are both string', function() {
      assert.strictEqual(typeof dessertGenerator.generateDessert(), 'string')
    })
  })
})
