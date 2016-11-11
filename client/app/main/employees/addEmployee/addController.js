angular
  .module('maerkApp')
  .controller('AddCtrl', function($scope, data, $mdDialog, Employee) {
    console.log(data);
    this.emp=angular.copy(data);

    $scope.add = function(newEmp){
       // console.log('hi')
       if(data) {
         Employee.updateEmp(newEmp);
       }else{
         Employee.createEmp(newEmp);
       }
       $mdDialog.hide();
     }
     $scope.cancel = function() {
       $mdDialog.cancel();
     }


  });
