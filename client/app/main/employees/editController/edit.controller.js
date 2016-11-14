(function () {
 'use strict';
 angular
     .module('maerkApp')
     .controller('EditController', EditController)

     function EditController($scope, Employee, data, $mdToast, $mdDialog){
       this.emp= angular.copy(data);
       // console.log(data)
       // $scope.add = function(newEmp){
       //
       //   Employee.updateEmp(newEmp);
       //   $mdDialog.hide();
       // }

       $scope.add = function(newEmp,event) {
       $mdToast.show({
           hideDelay   : 0,
           position    : ' bottom left',
           controller  : 'ToastCtrl',
           parent: angular.element(document.body),
           templateUrl : 'app/main/employees/editController/toastController/toast.html'
         }).then(function(){
          //  Employee.updateEmp() = newEmp;
           Employee.updateEmp(newEmp);
             $mdDialog.hide();
          //  console.log('hello')
         })
         .catch(function(){

           console.log("hello there");
         });
       };
       $scope.cancel = function() {
         $mdDialog.cancel();
       }
     }

})();
