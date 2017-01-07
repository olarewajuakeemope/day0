// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for proper fizzbuzz functionality", function() {
  it("should return true for 300", function() {
    assert(myApp.divisibleBy3(300) == true);
	expect(myApp.divisibleBy3(300)).to.not.equal(false);
	expect(myApp.divisibleBy3(300)).to.equal(true);
  })
  it("should return true for 200", function() {
    assert(myApp.divisibleBy5(200) == true);
	expect(myApp.divisibleBy5(200)).to.not.equal(false);
	expect(myApp.divisibleBy5(200)).to.equal(true);
  })
  it("should return true for 15 or 108", function() {
    assert(myApp.divisibleBy5or3(15) == true);
	expect(myApp.divisibleBy5or3(108)).to.not.equal(false);
	expect(myApp.divisibleBy5or3(15)).to.equal(true);
  })
  it("should return true for 45", function() {
    assert(myApp.divisibleBy5and3(45) == true);
	expect(myApp.divisibleBy5and3(4)).to.not.equal(false);
	expect(myApp.divisibleBy5and3(45)).to.equal(true);
  })
})

