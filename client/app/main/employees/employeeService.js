
'use strict';

(function() {

  function EmployeeResource($resource) {



   var empResource = $resource('/api/employees/:id/:controller', {
     id: '@_id'
   },{
     update:{
       method:'put',
       params:{
         id:'@_id'
       }
     }
   });


   var employees = empResource.query();

   return {
     getAll:employees,
     createEmp : function(newEmp){
       new empResource(newEmp).$save().then(function(d) {
         employees.push(d);
       })
     },

     updateEmp : function(data){
     empResource.update({_id:data._id},data).$promise.then(function(editEmp) {
     });
   }
 }
}


  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);
})();
