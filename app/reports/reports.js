'use strict';

angular.module('myApp.reports', ['ui.router','ngMaterial'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('reports',
  {
    name:'reports',
    url:'/reports',
    templateUrl: 'reports/reports.html',
    controller: 'ReportsCtrl'
  });
}])

.controller('ReportsCtrl', [function() {

}]);
