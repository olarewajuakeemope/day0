// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for array aithmetic or geometric functionality", function() {
  it("should return true for arithmetic array [500, 1000, 1500]", function() {
    assert(myApp.isArithmetic([500, 1000, 1500]) == true);
	expect(myApp.isArithmetic([500, 1000, 1500])).to.not.equal(false);
	expect(myApp.isArithmetic([500, 1000, 1500])).to.equal(true);
  })
  it("should return true for geometric array [1, 5, 25]", function() {
    assert(myApp.isGeometric([1, 5, 25]) == true);
	expect(myApp.isGeometric([1, 5, 25])).to.not.equal(false);
	expect(myApp.isGeometric([1, 5, 25])).to.equal(true);
  })
})

