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
      $scope.edit = function(editEmp){
        console.log("ohh myyy")
        Employee.editEmp(editEmp);
        $mdDialog.hide();
      }

      // this.types = [{label: 'Part Time', value: 'part-time'}, {label: 'Full Time', value: 'full-time'}, {label: 'Project', value: 'project'}];
      // function toTitleCase(str)
      // {
      //     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      // }
      // this.type = {label: toTitleCase(data.placement_type.replace('-', ' ')) , value: data.placement_type};
      // $scope.cancel = function(){
      //   $mdDialog.cancel();
      // }
    // $scope.first_name = data.first_name;
    // $scope.last_name = data.last_name;
    // $scope.client = data.client;
    // $scope.skill = data.skill;
    // $scope.recruiter = data.recruiter;
    // $scope.salary = data.salary;
    // $scope.insurance = data.insurance;
  });
