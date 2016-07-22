var expect = require('chai').expect
var sayNumber = require('./sayNumber')

describe("basic test", function () {
  it('basically works', function () {
    expect(sayNumber(123)).to.eql('one hundred twenty three')
  })
})