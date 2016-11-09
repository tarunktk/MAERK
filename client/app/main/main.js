'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('main', {
      url: '/dashboard',
      template: '<main class="flex layout-column"></main>',
      authenticate : true,
      // abstract: true
    })
    .state("main.employees",{
      url:"/employees",
      templateUrl:"app/main/employees/employees.html",
      controller:'EmployeesController',
      controllerAs:'vm',
      authenticate :true
    })
    .state("main.skills",{
      url:"/skills",
      templateUrl:"app/main/skills/skills.html",
      controller:'skillsController',
      controllerAs:'ctrl',
      authenticate:true
    })
    .state("main.add",{
      url:"/addEmployee",
      templateUrl:"app/main/employees/addEmployee/addEmployee.html",
      controller:'AddCtrl',
      controllerAs:'project',
      authenticate:true
    })
  });
