'use strict';

angular.module('myApp.administrative-options', 
				['ui.router','ngMaterial','myApp.delivery-units','myApp.projects','myApp.people'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('administrative-options',
  {
    name:'administrative-options',
    url:'/administrative-options',
    templateUrl: 'administrative-options/administrative-options.html',
    controller: 'AdministrativeOptionsCtrl'
  });
}])

.controller('AdministrativeOptionsCtrl', [function() {

}]);
