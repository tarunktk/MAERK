(function () {
 'use strict';
 angular
     .module('maerkApp')
     .controller('ToastCtrl', ToastController)

     function ToastController($scope,$mdToast,$mdDialog){
         $scope.cancel=function(){
           $mdToast.cancel();
         }
         $scope.save = function(ev) {
             $mdDialog.hide();
             $mdToast.hide();
                 // resolve: {
                 //   data: function() {
                 //     return selected;
                 //   }
                 // }
}

};



})();
