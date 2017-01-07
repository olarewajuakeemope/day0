'use strict'

module.exports = {
 
 minimumItem: function(list) {
   return Math.min.apply(null, list);
 },
 
 maximumItem: function(list) {
   return Math.max.apply(null, list);
 }

}