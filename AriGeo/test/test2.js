// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for array aithmetic or geometric functionality", function() {
  it("should return true for arithmetic array [10, 20, 30]", function() {
    assert(myApp.isArithmetic([10, 20, 30]) == true);
	expect(myApp.isArithmetic([10, 20, 30])).to.not.equal(false);
	expect(myApp.isArithmetic([10, 20, 30])).to.equal(true);
  })
  it("should return true for geometric array [2, 8, 32]", function() {
    assert(myApp.isGeometric([2, 8, 32]) == true);
	expect(myApp.isGeometric([2, 8, 32])).to.not.equal(false);
	expect(myApp.isGeometric([2, 8, 32])).to.equal(true);
  })
})

