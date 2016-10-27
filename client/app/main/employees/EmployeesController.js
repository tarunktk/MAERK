(function(){
   'use strict';

   angular.module('maerkApp')
     .controller('EmployeesController', function($scope, $mdToast){
       $scope.deleteRowCallback = function(rows){
            $mdToast.show(
                $mdToast.simple()
                    .content('Deleted row id(s): '+rows)
                    .hideDelay(3000)
            );
        };
        $scope.saveRowCallback = function(row){
            $mdToast.show(
                $mdToast.simple()
                    .content('Row changed to: '+row)
                    .hideDelay(3000)
            );
        };
        $scope.selectedRowCallback = function(rows){
            $mdToast.show(
                $mdToast.simple()
                    .content('Selected row id(s): '+rows)
                    .hideDelay(3000)
            );
        };

       $scope.employeeList = [
           {
               employee_id: 1,
               firstName: 'aaa',
               lastName: 'dvdavda',
               client: 'ldkvdlkvb',
               skills: 'lwkdvzdlkv',
               recruiter: 'labclbl',
               revenue: 3200
           },
           {
               employee_id: 2,
               firstName: 'andc;zdnv;',
               lastName: 'lkefbdlksf',
               client: 'kfvakfjb',
               skills: 'cb,cbscb',
               recruiter:'lkdnvlksdn',

               revenue: '14%'
           },
           {
               employee_id: 3,
               firstName: 'Frozen joghurt',
               lastName: 159,
               client: 6.0,
               skills: 24,
               recruiter: 4.0,
               hours: 87,
               revenue: '14%'
           },
           {
               employee_id: 4,
               firstName: 'Frozkwefnk',
               lastName: 'ldkfndslf',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,
               revenue: '14%'
           },
           {
               employee_id: 5,
               firstName: 'lksnflksdnv',
               lastName: 'ldknds',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,

               revenue: '14%'
           },
           {
               employee_id: 6,
               firstName: 'knfdslknfrt',
               lastName: 'jdkfdkjsb',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,
               revenue: '14%'
           },
           {
               employee_id: 7,
               firstName: 'Fe[pfe[pfkew[f]]]',
               lastName: 'fhoeufewbf',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,

               revenue: '14%'
           },
           {
               employee_id: 8,
               firstName: 'lksvsdkvd',
               lastName: 'kjbfdskjbfkdjsbfd',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,

               revenue: '14%'
           },
           {
               employee_id: 9,
               firstName: 'sljks;dkjvsdkjv',
               lastName: 'dndskljn',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,

               revenue: '14%'
           },
           {
               employee_id: 10,
               firstName: 'nnnnnnn',
               lastName: 'mmmmmmm',
               client: 6.0,
               skills: 24,
               recruiter: 4.0,

               revenue: '14%'
           }
       ];
   });
}());
