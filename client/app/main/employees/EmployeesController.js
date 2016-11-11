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
          $scope.showActivateButton = false;
          $scope.selected = rows;
        }
      }


      $scope.saveRowCallback = function(row) {
        $mdToast.show(
          $mdToast.simple()
          .content('Row changed to: ' + row)
          .hideDelay(3000)
        );
      };
      $scope.employeeList = Employee.getAll;
      // $scope.employeeList = [{
      //   employeeId: 1,
      //   firstName: 'Peter',
      //   lastName: 'Griffin',
      //   client: 'Pawtucket Brewery',
      //   skills: 'HAHAHAHAHAHA!!',
      //   recruiter: 'Angela',
      //   revenue: 50000
      // }, {
      //   employeeId: 2,
      //   firstName: 'Louis',
      //   lastName: 'Griffin',
      //   client: 'Peter',
      //   skills: 'Groceries',
      //   recruiter: 'Peter',
      //   revenue: 50000
      // }, {
      //   employeeId: 3,
      //   firstName: 'Stewie',
      //   lastName: 'Griffin',
      //   client: 'ISIS',
      //   skills: 'Singing & beating shit out of brain',
      //   recruiter: 'Louis',
      //   revenue: 50000
      // }, {
      //   employeeId: 4,
      //   firstName: 'Brain',
      //   lastName: 'Griffin',
      //   client: 'Self',
      //   skills: 'Writes Stuff',
      //   recruiter: 'Carter Pewterschmidt',
      //   revenue: 50000
      // }, {
      //   employeeId: 5,
      //   firstName: 'Megan',
      //   lastName: 'Griffin',
      //   client: 'Superstore USA',
      //   skills: 'Shut up MEG!!',
      //   recruiter: 'Mr.Penisburg',
      //
      //   revenue: 50000
      // }, {
      //   employeeId: 6,
      //   firstName: 'Chris',
      //   lastName: 'Griffin',
      //   client: 'Quahog Mini-Mart',
      //   skills: 'Football',
      //   recruiter: 'Carl',
      //   revenue: 50000
      // }, {
      //   employeeId: 7,
      //   firstName: 'Adam',
      //   lastName: 'West',
      //   client: 'Quahog state',
      //   skills: 'Mayoring skills.:D',
      //   recruiter: 'Democracy???',
      //
      //   revenue: 50000
      // }, {
      //   employeeId: 8,
      //   firstName: 'Hebert',
      //   lastName: 'The Pervert',
      //   client: 'young boys',
      //   skills: 'luring teens with candy',
      //   recruiter: 'unknown',
      //
      //   revenue: 5000000
      // }, {
      //   employeeId: 9,
      //   firstName: 'Glenn',
      //   lastName: 'Quagmire',
      //   client: 'American airlines',
      //   skills: 'Pilot/HandcuffPicker',
      //   recruiter: 'unknown',
      //   revenue: 1400000
      // }, {
      //   employeeId: 10,
      //   firstName: 'Cleveland',
      //   lastName: 'Brown',
      //   client: 'Unemployed',
      //   skills: 'no no no no no',
      //   recruiter: 'i give up',
      //   revenue: 50000
      // }];
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
          // .then(function(answer) {
          //   $scope.status = 'You said the information was "' + answer + '".';
          // }, function() {
          //   $scope.status = 'You cancelled the dialog.';
          // })
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
      };

      // $scope.showConfirm = function(ev) {
      //   var confirm = $mdDialog.confirm()
      //     .title('Do you want to edit Employee information?')
      //     .targetEvent(ev)
      //     .ok('YES')
      //     .cancel('Nah!!');
      //   }
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
            controller: 'AddCtrl',
            controllerAs: 'project',
            locals: {
              data: selected
            },
            templateUrl: 'app/main/employees/addEmployee/addEmployee.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen
              // resolve: {
              //   data: function() {
              //     return selected;
              //   }
              // }
          })
          .then(function(answer) {

            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          })
      };

      $scope.showActivate = function(ev) {

        var confirm = $mdDialog.confirm()
          .title('Activate/Deactivate an employee(s)')
          .targetEvent(ev)
          .ok('Yeah sure!!')
          .cancel('No thanks!!');

        $mdDialog.show(confirm).then(function() {
          $scope.status = 'You decided to get rid of your debt.';
        }, function() {
          $scope.status = 'You decided to keep your debt.';
        });
      };
    })
})();
