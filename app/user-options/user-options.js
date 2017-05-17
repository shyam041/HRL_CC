'use strict';

angular.module('myApp.user-options', ['ui.router','ngMaterial'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('user-options',
  {
    name:'user-options',
    url:'/user-options',
    templateUrl: 'user-options/user-options.html',
    controller: 'UserOptionsCtrl'
  });
}])

.controller('UserOptionsCtrl', [function() {

}]);
