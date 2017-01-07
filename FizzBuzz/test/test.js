// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for proper fizzbuzz functionality", function() {
  it("should return true for 9", function() {
    assert(myApp.divisibleBy3(9) == true);
	expect(myApp.divisibleBy3(9)).to.not.equal(false);
	expect(myApp.divisibleBy3(9)).to.equal(true);
  })
  it("should return true for 20", function() {
    assert(myApp.divisibleBy5(20) == true);
	expect(myApp.divisibleBy5(20)).to.not.equal(false);
	expect(myApp.divisibleBy5(20)).to.equal(true);
  })
  it("should return true for 15 or 27", function() {
    assert(myApp.divisibleBy5or3(15) == true);
	expect(myApp.divisibleBy5or3(27)).to.not.equal(false);
	expect(myApp.divisibleBy5or3(15)).to.equal(true);
  })
  it("should return true for 15", function() {
    assert(myApp.divisibleBy5and3(15) == true);
	expect(myApp.divisibleBy5and3(15)).to.not.equal(false);
	expect(myApp.divisibleBy5and3(15)).to.equal(true);
  })
})

