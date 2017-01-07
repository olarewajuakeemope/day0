// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for proper fizzbuzz functionality", function() {
  it("should return true for 90", function() {
    assert(myApp.divisibleBy3(90) == true);
	expect(myApp.divisibleBy3(90).to.not.equal(false);
	expect(myApp.divisibleBy3(90)).to.equal(true);
  })
  it("should return true for 250", function() {
    assert(myApp.divisibleBy5(250) == true);
	expect(myApp.divisibleBy5(250)).to.not.equal(false);
	expect(myApp.divisibleBy5(250)).to.equal(true);
  })
  it("should return true for 45 or 108", function() {
    assert(myApp.divisibleBy5or3(45) == true);
	expect(myApp.divisibleBy5or3(108)).to.not.equal(false);
	expect(myApp.divisibleBy5or3(45)).to.equal(true);
  })
  it("should return true for 90", function() {
    assert(myApp.divisibleBy5and3(90) == true);
	expect(myApp.divisibleBy5and3(90)).to.not.equal(false);
	expect(myApp.divisibleBy5and3(90)).to.equal(true);
  })
})

