
(function () {
 'use strict';
 angular
     .module('maerkApp')
     .controller('skillsController', skillsController)
     // .controller('skillsController', function($scope) {


// })();
     // })

 function skillsController ($scope, $log) {
   this.year = '';
   this.years = ['2016','2015','2014'];
  //  var tabs = [
  //        { title: 'January'},
  //        { title: 'February'},
  //        { title: 'March'},
  //        { title: 'April'},
  //        { title: 'May'},
  //        { title: 'June'},
  //        { title: 'July'},
  //        { title: 'August'},
  //        { title: 'September'},
  //        { title: 'October'},
  //        { title: 'November'},
  //        { title: 'December'}
  //      ];
  //      selected = null,
  //      previous = null;
  //  $scope.tabs = tabs;
  //  $scope.selectedIndex = 2;
  //  $scope.$watch('selectedIndex', function(current, old){
  //    previous = selected;
  //    selected = tabs[current];
  //    if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
  //    if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
  //  });
  //  $scope.addTab = function (title, view) {
  //    view = view || title + " Content View";
  //    tabs.push({ title: title, content: view, disabled: false});
  //  };
  //  $scope.removeTab = function (tab) {
  //    var index = tabs.indexOf(tab);
  //    tabs.splice(index, 1);
  //  };
 }
})();
