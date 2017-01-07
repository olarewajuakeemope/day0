// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for array aithmetic or geometric functionality", function() {
  it("should return true for arithmetic array [100, 200, 300]", function() {
    assert(myApp.isArithmetic([100, 200, 300]) == true);
	expect(myApp.isArithmetic([100, 200, 300])).to.not.equal(false);
	expect(myApp.isArithmetic([100, 200, 300])).to.equal(true);
  })
  it("should return true for geometric array [2, 20, 200]", function() {
    assert(myApp.isGeometric([2, 20, 200]) == true);
	expect(myApp.isGeometric([2, 20, 200])).to.not.equal(false);
	expect(myApp.isGeometric([2, 20, 200])).to.equal(true);
  })
})

