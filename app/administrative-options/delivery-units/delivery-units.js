'use strict';

angular.module('myApp.delivery-units', ['ui.router','ngMaterial'])

.config(['$stateProvider', function($stateProvider)
{
  $stateProvider

  .state('delivery-units',
  {
    name:'delivery-units',
    url:'/delivery-units',
    templateUrl: 'administrative-options/delivery-units/delivery-units.html',
    controller: 'DeliveryUnitsCtrl',
    controllerAs: 'DU'
  });
}])

.controller('DeliveryUnitsCtrl', ['DeliveryUnitService',function(DeliveryUnitService)
{
	var DU = this;

  DU.headers  = ["DU Lead Name","DU Lead Enterprise ID","DU Lead Email ID","Edit","Delete"];
  var promise = DeliveryUnitService.fetchAllDUDetails();
  promise.then(function(data)
  {
    DU.details = data;
  });
  DU.onEditDu=function(Du)
  {
    alert(Du);
    console.log(Du);
  }

}]);
