// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for array aithmetic or geometric functionality", function() {
  it("should return true for arithmetic array [16, 20, 24]", function() {
    assert(myApp.isArithmetic([16, 20, 24]) == true);
	expect(myApp.isArithmetic([16, 20, 24])).to.not.equal(false);
	expect(myApp.isArithmetic([16, 20, 24])).to.equal(true);
  })
  it("should return true for geometric array [3, 6, 12, 24]", function() {
    assert(myApp.isGeometric([3, 6, 12, 24]) == true);
	expect(myApp.isGeometric([3, 6, 12, 24])).to.not.equal(false);
	expect(myApp.isGeometric([3, 6, 12, 24])).to.equal(true);
  })
})

