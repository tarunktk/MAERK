
(function () {
 'use strict';
 angular
     .module('maerkApp')
     .controller('skillsController', skillsController)


 function skillsController ($scope, $log) {
   this.year = '';
   this.years = ['2016','2015','2014'];
 }
})();
