// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('../app/library.js');

describe("Test for array minimum and maximum Item functionality", function() {
  it("should return 1 as minimum for [1, 2, 3]", function() {
    assert(myApp.minimumItem([1,2,3]) == 1);
	expect(myApp.minimumItem([1,2,3])).to.not.equal(2);
	expect(myApp.minimumItem([1,2,3])).to.equal(1);
  })
  it("should return 7 as maximum for [3, 7, 5]", function() {
    assert(myApp.maximumItem([3, 7, 5]) == 7);
	expect(myApp.maximumItem([3,7,5])).to.not.equal(4);
	expect(myApp.maximumItem([3,7,5])).to.equal(7);
  })
})

