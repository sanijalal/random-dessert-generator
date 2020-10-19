const assert = require('assert')
const { getRandomIndex } = require('../../helpers/utils')

describe('helpers', () => {
  describe('getRandomIndex', () => {
    it('should return a randomly index of the array', () => {
      const arr = ['val1', 'val2', 'val3']
      const result = getRandomIndex(arr)

      assert.strictEqual(typeof result, 'number')
      assert.ok(result >= 0 && result < arr.length)
    })
  })
})
