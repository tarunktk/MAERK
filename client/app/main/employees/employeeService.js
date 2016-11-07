'use strict';

(function() {

  function EmployeeResource($resource) {
    return $resource('/api/main/employee/:id/:controller', {id: '@_id'}, {

      get: {
        method: 'GET',
        params: {
          id: '@_id'
        }
      },
			create: {
        method: 'POST',
      },
			update: {
        method: 'PUT',
      }
    });
  }

  angular.module('maerkApp.auth')
    .factory('EmployeeService', EmployeeResource);
})();
