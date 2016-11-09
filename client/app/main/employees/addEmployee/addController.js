angular
  .module('maerkApp')
  .controller('AddCtrl', function($scope, data, $mdDialog, Employee) {
    console.log(data);
    this.emp=data

      $scope.add = function(newEmp){
        console.log("hi")
        Employee.createEmp(newEmp);
        $mdDialog.hide();
      }
      $scope.cancel = function(){
        $mdDialog.cancel();
      }

    // $scope.first_name = data.first_name;
    // $scope.last_name = data.last_name;
    // $scope.client = data.client;
    // $scope.skill = data.skill;
    // $scope.recruiter = data.recruiter;
    // $scope.salary = data.salary;
    // $scope.insurance = data.insurance;
  });
