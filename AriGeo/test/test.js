// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for array aithmetic or geometric functionality", function() {
  it("should return true for arithmetic array [1, 2, 3]", function() {
    assert(myApp.isArithmetic([1,2,3]) == true);
	expect(myApp.isArithmetic([1,2,3])).to.not.equal(false);
	expect(myApp.isArithmetic([1,2,3])).to.equal(true);
  })
  it("should return true for geometric array [2, 4, 8, 16]", function() {
    assert(myApp.isGeometric([2, 4, 8, 16]) == true);
	expect(myApp.isGeometric([2, 4, 8, 16])).to.not.equal(false);
	expect(myApp.isGeometric([2, 4, 8, 16])).to.equal(true);
  })
})

