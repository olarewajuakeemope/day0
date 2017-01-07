'use strict'

module.exports = {
 
 divisibleBy3: function(num) {
   if(num%3===0)
	   return true;
 },
 
 divisibleBy5: function(num) {
   if(num%5===0)
	   return true;
 },
 
 divisibleBy5or3: function(num) {
   if(num%3===0||num%5===0)
	   return true;
 },

  divisibleBy5and3: function(num) {
   if(num%3===0&&num%5===0)
	   return true;
 }
}