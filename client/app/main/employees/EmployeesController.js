(function() {
  angular.module('maerkApp')
    .controller('EmployeesController', function($scope, $mdToast, $mdDialog, Employee) {


      $scope.showEditButton = false;
      $scope.showDeleteButton = false;
      $scope.showActivateButton = false;
      $scope.selected = [];
      $scope.selectedRowCallback = function(rows) {
        console.log('Working');
        if (rows.length === 0) {
          $scope.showEditButton = false;
          $scope.showDeleteButton = false;
          $scope.showActivateButton = false;
          $scope.selected = rows;
        } else if (rows.length === 1) {
          $scope.showEditButton = true;
          $scope.showDeleteButton = true;
          $scope.showActivateButton = true;
          $scope.selected = rows;
        } else {
          $scope.showEditButton = false;
          $scope.showDeleteButton = true;
          $scope.showActivateButton = true;
          $scope.selected = rows;
        }
      }


      $scope.saveRowCallback = function(row) {
        $mdToast.show(
          $mdToast.simple()
          .content('Row changed to: ' + row)
          .hideDelay(3000)
        );
      }

      $scope.employeeList = Employee.getAll;
      $scope.status = '';
      $scope.showAdvanced = function(ev) {
        $mdDialog.show({

          controller: 'AddCtrl',
          controllerAs: 'project',
          templateUrl: 'app/main/employees/addEmployee/addEmployee.html',
          locals: {
            data: null
          },
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: $scope.customFullscreen
        })

      }

      $scope.showDelete = function(ev) {
        var confirm = $mdDialog.confirm()
          .title('You sure to get rid of this SOB(s)??')
          .targetEvent(ev)
          .ok('FINISH HIM/THEM!')
          .cancel('Nah! Just kidding');
        $mdDialog.show(confirm).then(function() {
          $scope.employeeList = $scope.employeeList.filter(function(employee) {
            return $scope.selected.indexOf(employee._id) < 0;
          });
          console.log($scope.employeeList);
          $scope.status = 'You decided to get rid of your debt.';
        }, function() {
          $scope.status = 'You decided to keep your debt.';
        });
      }

      $scope.showEdit = function(ev) {
        var arrayObjectOf = function(myArray, searchTerm) {
          for (var i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i]._id === searchTerm) return myArray[i];
          }
          return -1;
        }
        var selected = arrayObjectOf($scope.employeeList, $scope.selected[0]);
        console.log($scope.employeeList);
        $mdDialog.show({
            controller: 'EditController',
            controllerAs: 'project',
            locals: {
              data: selected
            },
            templateUrl: 'app/main/employees/addEmployee/addEmployee.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen

          })
          .then(function(answer) {

            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          })
      }
      $scope.showConfirm = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to de activate the employee?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('Cancel');


        $mdDialog.show(confirm).then(function() {
          $scope.deactivate()
          $scope.status = 'You decided to de activate the employee.';
        }, function() {
          $scope.status = 'You decided to keep the employee.';
        })
      }

      // // DELETE FUNCTIONALITY
      // $scope.showDelete = function(ev) {
      //   var confirm = $mdDialog.confirm()
      //     .title('You sure to get rid of this SOB(s)??')
      //     .targetEvent(ev)
      //     .ok('FINISH HIM/THEM!')
      //     .cancel('Nah! Just kidding');
      //   $mdDialog.show(confirm).then(function() {
      //     $scope.employeeList = $scope.employeeList.filter(function(employee) {
      //       return $scope.selected.indexOf(employee._id) < 0;
      //     });
      //     console.log($scope.employeeList)
      // })
      // };

      // $scope.showActivate = function(ev) {


      $scope.showConfirmAct = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to activate the employee?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('Cancel');


        $mdDialog.show(confirm).then(function() {
          $scope.activate()
          $scope.status = 'You decided to activate the employee.';
        }, function() {
          $scope.status = 'You decided to cancel.';
        })
      }

      $scope.activate = function() {
        for (var i = 0; i < $scope.selected.length; i++) {
          for (var j = 0; j < $scope.employeeList.length; j++) {
            if ($scope.selected[i] == $scope.employeeList[j]._id) {
              $scope.employeeList[j].status = true;
              Employee.updateEmp($scope.employeeList[j]);
              console.log
              console.log("hi")
            }
          }
        }
      }

      $scope.deactivate = function() {
          for (var i = 0; i < $scope.selected.length; i++) {
            for (var j = 0; j < $scope.employeeList.length; j++) {
              if ($scope.selected[i] == $scope.employeeList[j]._id) {
                $scope.employeeList[i].status = false;
                Employee.updateEmp($scope.employeeList[j]);
              }
            }
          }
        }
        // $scope.showActivate = function(ev) {
        //
        //   var confirm = $mdDialog.confirm()
        //     .title('Activate/Deactivate an employee(s)')
        //     .targetEvent(ev)
        //     .ok('Yeah sure!!')
        //     .cancel('No thanks!!');
        //
        //   $mdDialog.show(confirm).then(function() {
        //     $scope.employeeList = $scope.employeeList.filter(function(employee) {
        //       return $scope.selected.indexOf(employee._id) < 0;
        //     });
        //     $scope.status = 'You decided to get rid of your debt.';
        //   }, function() {
        //     $scope.status = 'You decided to keep your debt.';
        //   });
        // };

    }
  })
})();
