(function(){
   'use strict';

   angular.module('maerkApp')
     .controller('EmployeesController', function($scope, $mdToast){

               $scope.userState = '';
               $scope.states = ('add edit delete').split(' ').map(function (state) { return { abbrev: state }; });


       $scope.employeeList = [
           {
               employee_id: 1,
               firstName: 'Peter',
               lastName: 'Griffin',
               client: 'Pawtucket Brewery',
               skills: 'HAHAHAHAHAHA!!',
               recruiter: 'Angela',
               revenue: 50000
           },
           {
               employee_id: 2,
               firstName: 'Louis',
               lastName: 'Griffin',
               client: 'Peter',
               skills: 'Groceries',
               recruiter:'Peter',
               revenue: 50000
           },
           {
               employee_id: 3,
               firstName: 'Stewie',
               lastName: 'Griffin',
               client: 'ISIS',
               skills: 'Singing & beating shit out of brain',
               recruiter: 'Louis',
               revenue: 50000
           },
           {
               employee_id: 4,
               firstName: 'Brain',
               lastName: 'Griffin',
               client:    'Self',
               skills:   'Writes Stuff',
               recruiter: 'Carter Pewterschmidt',
               revenue: 50000
           },
           {
               employee_id: 5,
               firstName: 'Megan',
               lastName: 'Griffin',
               client: 'Superstore USA',
               skills: 'Shut up MEG!!',
               recruiter: 'Mr.Penisburg',

               revenue: 50000
           },
           {
               employee_id: 6,
               firstName: 'Chris',
               lastName: 'Griffin',
               client: 'Quahog Mini-Mart',
               skills: 'Football',
               recruiter: 'Carl',
               revenue: 50000
           },
           {
               employee_id: 7,
               firstName: 'Adam',
               lastName: 'West',
               client: 'Quahog state',
               skills: 'Mayoring skills.:D',
               recruiter: 'Democracy???',

               revenue: 50000
           },
           {
               employee_id: 8,
               firstName: 'Hebert',
               lastName: 'The Pervert',
               client: 'young boys',
               skills: 'luring teens with candy',
               recruiter: 'unknown',

               revenue: 5000000
           },
           {
               employee_id: 9,
               firstName: 'Glenn :(',
               lastName: 'Quagmire',
               client: 'American airlines',
               skills: 'Pilot/HandcuffPicker',
               recruiter: 'unknown',
               revenue: 1400000
           },
           {
               employee_id: 10,
               firstName: 'Cleveland',
               lastName: 'Brown',
               client: 'Unemployed',
               skills: 'no no no no no',
               recruiter: 'i give up',
               revenue: 50000
           }
       ];
   });
}());
