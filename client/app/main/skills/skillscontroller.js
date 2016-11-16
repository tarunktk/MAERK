(function() {
  'use strict';
  angular
    .module('maerkApp')
    .controller('skillsController', skillsController)


  function skillsController($scope, $log) {
    this.year = '';
    this.years = ['2016', '2015', '2014'];
    $scope.skillList = [{

      skills: 'Tarun',
      employeeCount: 'Kondapalli',
      revenue: 'Facebook'
    }, {

      skills: 'Shrusti',
      employeeCount: 'Adi',
      revenue: 'Wells Fargo'

    }, {
      skills: 'Raju',
      employeeCount: 'Lakshmi',
      revenue: 'Verizon'
    }, {

      skills: 'Lekha',
      employeeCount: 'Tamvada',
      revenue: 'Gaao'
    }, {

      skills: 'Ashwini',
      employeeCount: 'Vakada',
      revenue: 'Ash'
    }, {

      skills: 'Harsha',
      employeeCount: 'Eruvuru',
      revenue: 'BOFA'
    }, {

      skills: 'Vinni',
      employeeCount: 'Jagar',
      revenue: 'Jagaur'
    }, {

      skills: 'Anusha',
      employeeCount: 'Manikonda',
      revenue: 'Chick'
    }, {

      skills: 'Gnandeep',
      employeeCount: 'Suriseeti',
      revenue: 'Dal'
    }, {

      skills: 'Nitin',
      employeeCount: 'kondapalli',
      revenue: 'Baylor'
    } ]

    var reports =
    {
      'January':[{

        skills: 'Tarun',
        employeeCount: 'Kondapalli',
        revenue: 'Facebook'
      }, {

        skills: 'Shrusti',
        employeeCount: 'Adi',
        revenue: 'Wells Fargo'

      }, {
        skills: 'Raju',
        employeeCount: 'Lakshmi',
        revenue: 'Verizon'
      }, {

        skills: 'Lekha',
        employeeCount: 'Tamvada',
        revenue: 'Gaao'
      }, {

        skills: 'Ashwini',
        employeeCount: 'Vakada',
        revenue: 'Ash'
      }, {

        skills: 'Harsha',
        employeeCount: 'Eruvuru',
        revenue: 'BOFA'
      }, {

        skills: 'Vinni',
        employeeCount: 'Jagar',
        revenue: 'Jagaur'
      }, {

        skills: 'Anusha',
        employeeCount: 'Manikonda',
        revenue: 'Chick'
      }, {

        skills: 'Gnandeep',
        employeeCount: 'Suriseeti',
        revenue: 'Dal'
      }, {

        skills: 'Nitin',
        employeeCount: 'kondapalli',
        revenue: 'Baylor'
      } ],
      'February':[{

        skills: 'Donald',
        employeeCount: 'Trump',
        revenue: 'WH'
      }, {

        skills: 'Hilary',
        employeeCount: 'Clinton',
        revenue: 'MIA'

      }, {
        skills: 'Ahwldkh',
        employeeCount: 'kjsgckjsg',
        revenue: 'eoihfwef'
      }, {

        skills: 'ldkhcdl',
        employeeCount: 'podjcdp',
        revenue: 'doihd'
      }, {

        skills: 'Ashwini',
        employeeCount: 'lchdohcoe',
        revenue: 'Ash'
      }, {

        skills: 'choecgoc',
        employeeCount: 'Dickson',
        revenue: 'BOFA'
      }, {

        skills: 'Vinni',
        employeeCount: 'Jagar',
        revenue: 'Jagaur'
      }, {

        skills: 'Anusha',
        employeeCount: 'Manikonda',
        revenue: 'adkchdkobc'
      }, {

        skills: 'Gnandeep',
        employeeCount: 'Suriseeti',
        revenue: 'DHL'
      }, {

        skills: 'Nitin',
        employeeCount: 'kondapalli',
        revenue: 'Baylor'
      }, ],
      'March':[{

        skills: 'Donaldmarch',
        employeeCount: 'Trump',
        revenue: 'WH'
      }, {

        skills: 'Hilarymarch',
        employeeCount: 'Clinton',
        revenue: 'MIA'

      }, {
        skills: 'Ahwldkhmarch',
        employeeCount: 'kjsgckjsg',
        revenue: 'eoihfwef'
      }, {

        skills: 'ldkhcdl',
        employeeCount: 'podjcdp',
        revenue: 'doihd'
      }, {

        skills: 'Ashwini',
        employeeCount: 'lchdohcoe',
        revenue: 'Ash'
      }, {

        skills: 'choecgoc',
        employeeCount: 'Dickson',
        revenue: 'BOFA'
      }, {

        skills: 'Vinni',
        employeeCount: 'Jagar',
        revenue: 'Jagaur'
      }, {

        skills: 'Anusha',
        employeeCount: 'Manikonda',
        revenue: 'adkchdkobc'
      }, {

        skills: 'Gnandeep',
        employeeCount: 'Suriseeti',
        revenue: 'DHL'
      }, {

        skills: 'Nitin',
        employeeCount: 'kondapalli',
        revenue: 'Baylor'
      }, ]

    }
    this.updateMonth = function(month) {
      $scope.skillList = reports[month]
    };
  }
})();
