'use strict';

angular.module('myApp.delivery-units', ['ui.router','ngMaterial'])

.config(['$stateProvider', function($stateProvider) 
{
  $stateProvider

  .state('administrative-options.delivery-units',
  {
    name:'administrative-options.delivery-units',
    url:'/delivery-units',
    templateUrl: 'administrative-options/delivery-units/delivery-units.html',
    controller: 'DeliveryUnitsCtrl'
  });
}])

.controller('DeliveryUnitsCtrl', [function() {

}]);
