'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('main', {
      url: '/dashboard',
      template: '<main class="flex layout-column"></main>'
    })
    .state("main.employees",{
      url:"/employees",
      templateUrl:"app/main/employees/employees.html",
      controller:'EmployeesController',
      controllerAs:'vm'
    })
  });
