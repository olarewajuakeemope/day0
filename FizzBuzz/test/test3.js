// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for proper fizzbuzz functionality", function() {
  it("should return true for 30", function() {
    assert(myApp.divisibleBy3(30) == true);
	expect(myApp.divisibleBy3(30).to.not.equal(false);
	expect(myApp.divisibleBy3(30)).to.equal(true);
  })
  it("should return true for 2500", function() {
    assert(myApp.divisibleBy5(2500) == true);
	expect(myApp.divisibleBy5(2500)).to.not.equal(false);
	expect(myApp.divisibleBy5(2500)).to.equal(true);
  })
  it("should return true for 135 or 108", function() {
    assert(myApp.divisibleBy5or3(135) == true);
	expect(myApp.divisibleBy5or3(108)).to.not.equal(false);
	expect(myApp.divisibleBy5or3(135)).to.equal(true);
  })
  it("should return true for 225", function() {
    assert(myApp.divisibleBy5and3(225) == true);
	expect(myApp.divisibleBy5and3(225)).to.not.equal(false);
	expect(myApp.divisibleBy5and3(225)).to.equal(true);
  })
})

