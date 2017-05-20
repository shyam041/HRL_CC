'use strict';

angular.module('myApp.people',['ui.router','ngMaterial',])

.config(['$stateProvider',function($stateProvider)
{
	$stateProvider
	.state('people',
	{
		name:'people',
		url:'/peoples',
		templateUrl:'administrative-options/people/people.html',
		controller:'PeopleCtrl',
		controllerAs:'People'
	})

}])

.controller('PeopleCtrl',['PeopleService',function(PeopleService)
{
	var people = this;
	var promise = PeopleService.fetchAllPeopleDetails();
	promise.then(function(data)
	{
		people.details = data;
	});
}])
