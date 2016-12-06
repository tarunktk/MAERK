
(function () {
 'use strict';
 angular
     .module('maerkApp')
     .controller('clientController', clientController)


 function clientController ($scope, $log) {
   this.year = '';
   this.years = ['2016','2015','2014'];
 }
})();
