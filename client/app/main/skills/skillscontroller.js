(function() {
  'use strict';
  angular
    .module('maerkApp')
    .controller('skillsController', skillsController)


  function skillsController($scope, $log) {
    this.year = '';
    this.years = ['2016', '2015', '2014'];
    $scope.nutritionList = [{

      first_name: 'Tarun',
      last_name: 'Kondapalli',
      client: 'Facebook'
    }, {

      first_name: 'Shrusti',
      last_name: 'Adi',
      client: 'Wells Fargo'

    }, {
      first_name: 'Raju',
      last_name: 'Lakshmi',
      client: 'Verizon'
    }, {

      first_name: 'Lekha',
      last_name: 'Tamvada',
      client: 'Gaao'
    }, {

      first_name: 'Ashwini',
      last_name: 'Vakada',
      client: 'Ash'
    }, {

      first_name: 'Harsha',
      last_name: 'Eruvuru',
      client: 'BOFA'
    }, {

      first_name: 'Vinni',
      last_name: 'Jagar',
      client: 'Jagaur'
    }, {

      first_name: 'Anusha',
      last_name: 'Manikonda',
      client: 'Chick'
    }, {

      first_name: 'Gnandeep',
      last_name: 'Suriseeti',
      client: 'Dal'
    }, {

      first_name: 'Nitin',
      last_name: 'kondapalli',
      client: 'Baylor'
    } ]

    var reports =
    {
      'January':[{

        first_name: 'Tarun',
        last_name: 'Kondapalli',
        client: 'Facebook'
      }, {

        first_name: 'Shrusti',
        last_name: 'Adi',
        client: 'Wells Fargo'

      }, {
        first_name: 'Raju',
        last_name: 'Lakshmi',
        client: 'Verizon'
      }, {

        first_name: 'Lekha',
        last_name: 'Tamvada',
        client: 'Gaao'
      }, {

        first_name: 'Ashwini',
        last_name: 'Vakada',
        client: 'Ash'
      }, {

        first_name: 'Harsha',
        last_name: 'Eruvuru',
        client: 'BOFA'
      }, {

        first_name: 'Vinni',
        last_name: 'Jagar',
        client: 'Jagaur'
      }, {

        first_name: 'Anusha',
        last_name: 'Manikonda',
        client: 'Chick'
      }, {

        first_name: 'Gnandeep',
        last_name: 'Suriseeti',
        client: 'Dal'
      }, {

        first_name: 'Nitin',
        last_name: 'kondapalli',
        client: 'Baylor'
      } ],
      'February':[{

        first_name: 'Donald',
        last_name: 'Trump',
        client: 'WH'
      }, {

        first_name: 'Hilary',
        last_name: 'Clinton',
        client: 'MIA'

      }, {
        first_name: 'Ahwldkh',
        last_name: 'kjsgckjsg',
        client: 'eoihfwef'
      }, {

        first_name: 'ldkhcdl',
        last_name: 'podjcdp',
        client: 'doihd'
      }, {

        first_name: 'Ashwini',
        last_name: 'lchdohcoe',
        client: 'Ash'
      }, {

        first_name: 'choecgoc',
        last_name: 'Dickson',
        client: 'BOFA'
      }, {

        first_name: 'Vinni',
        last_name: 'Jagar',
        client: 'Jagaur'
      }, {

        first_name: 'Anusha',
        last_name: 'Manikonda',
        client: 'adkchdkobc'
      }, {

        first_name: 'Gnandeep',
        last_name: 'Suriseeti',
        client: 'DHL'
      }, {

        first_name: 'Nitin',
        last_name: 'kondapalli',
        client: 'Baylor'
      }, ],
      'March':[{

        first_name: 'Donaldmarch',
        last_name: 'Trump',
        client: 'WH'
      }, {

        first_name: 'Hilarymarch',
        last_name: 'Clinton',
        client: 'MIA'

      }, {
        first_name: 'Ahwldkhmarch',
        last_name: 'kjsgckjsg',
        client: 'eoihfwef'
      }, {

        first_name: 'ldkhcdl',
        last_name: 'podjcdp',
        client: 'doihd'
      }, {

        first_name: 'Ashwini',
        last_name: 'lchdohcoe',
        client: 'Ash'
      }, {

        first_name: 'choecgoc',
        last_name: 'Dickson',
        client: 'BOFA'
      }, {

        first_name: 'Vinni',
        last_name: 'Jagar',
        client: 'Jagaur'
      }, {

        first_name: 'Anusha',
        last_name: 'Manikonda',
        client: 'adkchdkobc'
      }, {

        first_name: 'Gnandeep',
        last_name: 'Suriseeti',
        client: 'DHL'
      }, {

        first_name: 'Nitin',
        last_name: 'kondapalli',
        client: 'Baylor'
      }, ]

    }
    this.updateMonth = function(month) {
      $scope.nutritionList = reports[month]
    //   switch (month) {
    //     case 'January':
    //       $scope.nutritionList = [{
    //
    //         first_name: 'Tarun',
    //         last_name: 'Kondapalli',
    //         client: 'Facebook'
    //       }, {
    //
    //         first_name: 'Shrusti',
    //         last_name: 'Adi',
    //         client: 'Wells Fargo'
    //
    //       }, {
    //         first_name: 'Raju',
    //         last_name: 'Lakshmi',
    //         client: 'Verizon'
    //       }, {
    //
    //         first_name: 'Lekha',
    //         last_name: 'Tamvada',
    //         client: 'Gaao'
    //       }, {
    //
    //         first_name: 'Ashwini',
    //         last_name: 'Vakada',
    //         client: 'Ash'
    //       }, {
    //
    //         first_name: 'Harsha',
    //         last_name: 'Eruvuru',
    //         client: 'BOFA'
    //       }, {
    //
    //         first_name: 'Vinni',
    //         last_name: 'Jagar',
    //         client: 'Jagaur'
    //       }, {
    //
    //         first_name: 'Anusha',
    //         last_name: 'Manikonda',
    //         client: 'Chick'
    //       }, {
    //
    //         first_name: 'Gnandeep',
    //         last_name: 'Suriseeti',
    //         client: 'Dal'
    //       }, {
    //
    //         first_name: 'Nitin',
    //         last_name: 'kondapalli',
    //         client: 'Baylor'
    //       }, ];
    //       return;
    //     case 'February':
    //       $scope.nutritionList = [{
    //
    //         first_name: 'Donald',
    //         last_name: 'Trump',
    //         client: 'WH'
    //       }, {
    //
    //         first_name: 'Hilary',
    //         last_name: 'Clinton',
    //         client: 'MIA'
    //
    //       }, {
    //         first_name: 'Ahwldkh',
    //         last_name: 'kjsgckjsg',
    //         client: 'eoihfwef'
    //       }, {
    //
    //         first_name: 'ldkhcdl',
    //         last_name: 'podjcdp',
    //         client: 'doihd'
    //       }, {
    //
    //         first_name: 'Ashwini',
    //         last_name: 'lchdohcoe',
    //         client: 'Ash'
    //       }, {
    //
    //         first_name: 'choecgoc',
    //         last_name: 'Dickson',
    //         client: 'BOFA'
    //       }, {
    //
    //         first_name: 'Vinni',
    //         last_name: 'Jagar',
    //         client: 'Jagaur'
    //       }, {
    //
    //         first_name: 'Anusha',
    //         last_name: 'Manikonda',
    //         client: 'adkchdkobc'
    //       }, {
    //
    //         first_name: 'Gnandeep',
    //         last_name: 'Suriseeti',
    //         client: 'DHL'
    //       }, {
    //
    //         first_name: 'Nitin',
    //         last_name: 'kondapalli',
    //         client: 'Baylor'
    //       }, ];
    //       return;
    //     case 'March':
    //       $scope.nutritionList = [{
    //
    //         first_name: 'Donald March',
    //         last_name: 'Kondapalli',
    //         client: 'Facebook'
    //       }, {
    //
    //         first_name: 'THilary march',
    //         last_name: 'Adi',
    //         client: 'Wells Fargo'
    //
    //       }, {
    //         first_name: 'Anusha march',
    //         last_name: 'Lakshmi',
    //         client: 'Verizon'
    //       }, {
    //
    //         first_name: 'Lekha march',
    //         last_name: 'Puka',
    //         client: 'Gaao'
    //       }, {
    //
    //         first_name: 'Ashwini march',
    //         last_name: 'Moddavada',
    //         client: 'Ash'
    //       }, {
    //
    //         first_name: 'Harsha march',
    //         last_name: 'Dickson',
    //         client: 'BOFA'
    //       }, {
    //
    //         first_name: 'Vinni march',
    //         last_name: 'Jagar',
    //         client: 'Jagaur'
    //       }, {
    //
    //         first_name: 'Anusha march',
    //         last_name: 'Manikonda',
    //         client: 'Chick'
    //       }, {
    //
    //         first_name: 'Gnandeep march',
    //         last_name: 'Suriseeti',
    //         client: 'Dal'
    //       }, {
    //
    //         first_name: 'Nitin march',
    //         last_name: 'kondapalli',
    //         client: 'Baylor'
    //       }, ];
    //       return;
    //   }
    };
  }
})();
