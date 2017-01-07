'use strict'

module.exports = {
 
 isArithmetic: function(list) {
   for(var i=0; i<list.length-2; i++){
      if(list[i+1]-list[i]===list[i+2]-list[i+1])
	   return true;
   }
 },
 
 isGeometric: function(list) {
   for(var i=0; i<list.length-2; i++){
      if(list[i+1]/list[i]===list[i+2]/list[i+1])
	   return true;
   }
 }

}